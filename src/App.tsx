import { useEffect } from "react";
import { Routes, Route, useNavigate, useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Index from "@/pages/Index";
import Learn from "@/pages/Learn";
import Whitelist from "@/pages/Whitelist";
import Airdrops from "@/pages/Airdrops";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

function App() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    // Handle Twitter OAuth callback
    const handleTwitterCallback = async () => {
      try {
        const error = searchParams.get("error");
        const errorDescription = searchParams.get("error_description");

        if (error) {
          console.error("Twitter auth error from URL:", error, errorDescription);
          window.location.href = 'https://aiswarm.ai';
          return;
        }

        // Get the session
        const { data: { session }, error: sessionError } = await supabase.auth.getSession();

        if (sessionError) {
          console.error("Failed to get session:", sessionError.message);
          window.location.href = 'https://aiswarm.ai';
          return;
        }

        if (!session) {
          console.log("No session found after callback");
          window.location.href = 'https://aiswarm.ai';
          return;
        }

        // Successfully authenticated
        console.log("Successfully authenticated with Twitter");
        navigate("/");
      } catch (error) {
        console.error("Unexpected error in Twitter callback:", error);
        window.location.href = 'https://aiswarm.ai';
      }
    };

    // Check if we're on the callback URL
    if (window.location.hash.includes("access_token")) {
      handleTwitterCallback();
    }
  }, [navigate, searchParams]);

  return (
    <div className="min-h-screen bg-dark text-white">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/whitelist" element={<Whitelist />} />
        <Route path="/airdrops" element={<Airdrops />} />
      </Routes>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;