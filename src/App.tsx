import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
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

// Handle Twitter callback for Swarmy bot authentication
const TwitterCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleTwitterCallback = async () => {
      console.log("Starting Twitter callback handling...");
      
      try {
        // Get the URL parameters
        const hashParams = new URLSearchParams(window.location.hash.slice(1));
        const queryParams = new URLSearchParams(window.location.search);
        
        console.log("URL hash parameters:", Object.fromEntries(hashParams));
        console.log("URL query parameters:", Object.fromEntries(queryParams));

        // Check for error in URL parameters
        const error = queryParams.get('error');
        const errorDescription = queryParams.get('error_description');
        
        if (error) {
          console.error("Twitter auth error from URL:", error, errorDescription);
          navigate("/");
          return;
        }

        // Get session
        const { data: { session }, error: sessionError } = await supabase.auth.getSession();
        
        if (sessionError) {
          console.error("Failed to get session:", sessionError.message);
          navigate("/");
          return;
        }

        if (!session) {
          console.log("No session found after callback");
          navigate("/");
          return;
        }

        console.log("Swarmy successfully authenticated with session:", {
          user: session.user.id,
          provider: session.user.app_metadata.provider
        });
        
        navigate("/");
      } catch (error) {
        console.error("Unexpected error in Twitter callback:", error);
        navigate("/");
      }
    };

    handleTwitterCallback();
  }, [navigate]);

  return null;
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