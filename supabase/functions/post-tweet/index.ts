const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("Received tweet request");
    
    const { tweet_text, access_token } = await req.json();
    console.log("Request payload:", { tweet_text });
    
    if (!tweet_text || !access_token) {
      throw new Error("Missing tweet_text or access_token in request body");
    }

    // Post tweet using OAuth 2.0
    const response = await fetch('https://api.twitter.com/2/tweets', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${access_token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: tweet_text }),
    });

    const responseText = await response.text();
    console.log("Twitter API Response:", {
      status: response.status,
      body: responseText
    });

    if (!response.ok) {
      throw new Error(`Twitter API error: ${response.status} - ${responseText}`);
    }

    return new Response(responseText, {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error: any) {
    console.error("Error posting tweet:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});