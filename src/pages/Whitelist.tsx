import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Whitelist = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await supabase
        .from('whitelist_signups')
        .insert([{ email }]);

      if (error) throw error;

      toast({
        title: "Success!",
        description: "You've been added to the whitelist. We'll contact you soon!",
      });

      // Navigate back to home after successful signup
      setTimeout(() => navigate('/'), 2000);
    } catch (error: any) {
      console.error('Error signing up for whitelist:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message === 'duplicate key value violates unique constraint "whitelist_signups_email_key"'
          ? "This email is already on the whitelist!"
          : "Failed to join whitelist. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-dark flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8 text-center">
        <div>
          <h1 className="text-4xl font-bold mb-4">
            Join the <span className="gradient-text">SWARM</span> Whitelist
          </h1>
          <p className="text-gray-300 mb-8">
            Be among the first to access SWARM tokens. Enter your email below to join the whitelist.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full"
          />
          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary-hover text-dark font-semibold"
            disabled={isLoading}
          >
            {isLoading ? "Joining..." : "Join Whitelist"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Whitelist;