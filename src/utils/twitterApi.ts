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