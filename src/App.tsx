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

// Handle Twitter callback
const TwitterCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleTwitterCallback = async () => {
      try {
        const { error } = await supabase.auth.getSession();
        if (error) {
          console.error("Auth error:", error.message);
          navigate("/");
          return;
        }
        // Successfully authenticated
        navigate("/");
      } catch (error) {
        console.error("Callback error:", error);
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