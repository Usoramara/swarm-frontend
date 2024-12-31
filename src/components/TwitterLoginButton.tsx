import { Button } from "@/components/ui/button";
import { Twitter } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";

export const TwitterLoginButton = () => {
  const { toast } = useToast();

  const handleTwitterLogin = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'twitter',
        options: {
          redirectTo: `${window.location.origin}/auth/twitter/callback`,
        },
      });

      if (error) {
        console.error("Twitter login error:", error.message);
        toast({
          variant: "destructive",
          title: "Login Error",
          description: "Failed to login with Twitter. Please try again.",
        });
      }
    } catch (error) {
      console.error("Twitter login error:", error);
      toast({
        variant: "destructive",
        title: "Login Error",
        description: "An unexpected error occurred. Please try again.",
      });
    }
  };

  return (
    <Button
      onClick={handleTwitterLogin}
      className="flex items-center gap-2 bg-[#1DA1F2] hover:bg-[#1a8cd8] text-white"
    >
      <Twitter size={20} />
      Sign in with Twitter
    </Button>
  );
};