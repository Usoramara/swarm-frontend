import { supabase } from "@/integrations/supabase/client";

// Get the current user's Twitter access token
export async function getTwitterAccessToken(): Promise<string | null> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    console.error("No authenticated user found");
    return null;
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('twitter_access_token')
    .eq('id', user.id)
    .single();

  return profile?.twitter_access_token || null;
}

// Get the current user's Twitter refresh token
export async function getTwitterRefreshToken(): Promise<string | null> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    console.error("No authenticated user found");
    return null;
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('twitter_refresh_token')
    .eq('id', user.id)
    .single();

  return profile?.twitter_refresh_token || null;
}

// Refresh Twitter tokens
export async function refreshTwitterTokens(): Promise<boolean> {
  console.log("Attempting to refresh Twitter tokens");
  
  const refreshToken = await getTwitterRefreshToken();
  if (!refreshToken) {
    console.error("No refresh token found");
    return false;
  }

  try {
    const response = await fetch('/.netlify/functions/twitter-token-refresh', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        refresh_token: refreshToken,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Failed to refresh tokens: ${error}`);
    }

    const data = await response.json();
    console.log("Successfully obtained new Twitter tokens");

    // Get current user
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      console.error("No authenticated user found");
      return false;
    }

    // Store new tokens
    const { error: updateError } = await supabase
      .from('profiles')
      .update({
        twitter_access_token: data.access_token,
        twitter_refresh_token: data.refresh_token
      })
      .eq('id', user.id);

    if (updateError) {
      console.error("Failed to store new tokens:", updateError);
      return false;
    }

    return true;
  } catch (error) {
    console.error("Error refreshing Twitter tokens:", error);
    return false;
  }
}

// Post a tweet
export async function postTweet(text: string): Promise<any> {
  console.log("Attempting to post tweet:", text);
  
  const accessToken = await getTwitterAccessToken();
  if (!accessToken) {
    throw new Error("No Twitter access token found");
  }

  const response = await fetch('/.netlify/functions/post-tweet', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      tweet_text: text,
      access_token: accessToken,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Failed to post tweet: ${error}`);
  }

  return response.json();
}

// Get user info
export async function getTwitterUserInfo(): Promise<any> {
  const accessToken = await getTwitterAccessToken();
  if (!accessToken) {
    throw new Error("No Twitter access token found");
  }

  const response = await fetch('https://api.twitter.com/2/users/me', {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Failed to get user info: ${error}`);
  }

  return response.json();
}