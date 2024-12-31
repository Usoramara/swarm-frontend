import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { generateCodeVerifier, generateCodeChallenge } from "@/utils/pkce";
import Index from "./pages/Index";
import Learn from "./pages/Learn";
import Airdrops from "./pages/Airdrops";
import Whitelist from "./pages/Whitelist";
import Footer from "./components/Footer";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

// Handle Twitter OAuth2 callback
const TwitterCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleTwitterCallback = async () => {
      console.log("Starting Twitter OAuth2 callback handling...");
      
      try {
        // Get the authorization code from URL
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
        const state = urlParams.get('state');
        const error = urlParams.get('error');
        
        console.log("URL parameters:", { code, state, error });

        if (error) {
          console.error("Twitter auth error:", error);
          navigate("/");
          return;
        }

        if (!code || !state) {
          console.error("Missing code or state parameter");
          navigate("/");
          return;
        }

        // Verify state matches stored state
        const storedState = localStorage.getItem('twitter_oauth_state');
        if (state !== storedState) {
          console.error("State mismatch");
          navigate("/");
          return;
        }

        // Get code verifier from storage
        const codeVerifier = localStorage.getItem('twitter_code_verifier');
        if (!codeVerifier) {
          console.error("No code verifier found");
          navigate("/");
          return;
        }

        // Exchange code for token using Supabase Edge Function
        const response = await fetch('/.netlify/functions/twitter-token-exchange', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            code,
            code_verifier: codeVerifier,
            redirect_uri: 'https://aiswarm.ai/auth/twitter/callback'
          })
        });

        if (!response.ok) {
          throw new Error('Failed to exchange code for token');
        }

        const tokenData = await response.json();
        console.log("Successfully obtained Twitter tokens");

        // Clean up storage
        localStorage.removeItem('twitter_oauth_state');
        localStorage.removeItem('twitter_code_verifier');

        // Get current user
        const { data: { user } } = await supabase.auth.getUser();
        
        if (!user) {
          console.error("No authenticated user found");
          navigate("/");
          return;
        }

        // Store tokens securely in Supabase
        const { error: updateError } = await supabase
          .from('profiles')
          .update({
            twitter_access_token: tokenData.access_token,
            twitter_refresh_token: tokenData.refresh_token
          })
          .eq('id', user.id);

        if (updateError) {
          console.error("Failed to store tokens:", updateError);
        }

        navigate("/");
      } catch (error) {
        console.error("Error in Twitter callback:", error);
        navigate("/");
      }
    };

    handleTwitterCallback();
  }, [navigate]);

  return null;
};

// Function to initiate Twitter OAuth2 flow
export const initiateTwitterAuth = async () => {
  try {
    // Generate and store PKCE values
    const codeVerifier = generateCodeVerifier();
    const codeChallenge = await generateCodeChallenge(codeVerifier);
    const state = generateCodeVerifier(); // Use same function to generate state

    // Store values in localStorage
    localStorage.setItem('twitter_code_verifier', codeVerifier);
    localStorage.setItem('twitter_oauth_state', state);

    // Construct Twitter OAuth URL
    const clientId = 'WTNrQS14bUhpMl83aU5adTd2NWM6MTpjaQ'; // Twitter Client ID
    const redirectUri = encodeURIComponent('https://aiswarm.ai/auth/twitter/callback');
    const scope = encodeURIComponent('tweet.read tweet.write users.read offline.access');
    
    const authUrl = `https://twitter.com/i/oauth2/authorize?` +
      `response_type=code` +
      `&client_id=${clientId}` +
      `&redirect_uri=${redirectUri}` +
      `&scope=${scope}` +
      `&state=${state}` +
      `&code_challenge=${codeChallenge}` +
      `&code_challenge_method=S256`;

    // Redirect to Twitter
    window.location.href = authUrl;
  } catch (error) {
    console.error("Error initiating Twitter auth:", error);
  }
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/learn" element={<Learn />} />
              <Route path="/learn/airdrops" element={<Airdrops />} />
              <Route path="/whitelist" element={<Whitelist />} />
              <Route path="/auth/twitter/callback" element={<TwitterCallback />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
          <Footer />
        </div>
        <Toaster />
        <Sonner />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;