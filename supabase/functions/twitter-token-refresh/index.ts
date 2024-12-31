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
    const { refresh_token } = await req.json();
    console.log("Received token refresh request");

    if (!refresh_token) {
      throw new Error("No refresh token provided");
    }

    // Twitter OAuth2 token endpoint
    const tokenUrl = 'https://api.twitter.com/2/oauth2/token';
    const clientId = Deno.env.get("TWITTER_CLIENT_ID");
    const clientSecret = Deno.env.get("TWITTER_CLIENT_SECRET");

    if (!clientId || !clientSecret) {
      console.error("Missing Twitter credentials");
      throw new Error("Missing Twitter credentials");
    }

    // Create Basic Auth header
    const basicAuth = btoa(`${clientId}:${clientSecret}`);
    console.log("Generated Basic Auth header");

    // Exchange refresh token for new tokens
    const response = await fetch(tokenUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${basicAuth}`,
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: refresh_token,
        client_id: clientId,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("Twitter token refresh error:", error);
      throw new Error(`Twitter API error: ${error}`);
    }

    const data = await response.json();
    console.log("Successfully refreshed tokens");
    
    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error("Token refresh error:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});