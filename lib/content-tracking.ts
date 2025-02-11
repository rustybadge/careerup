import { createClient } from '@supabase/supabase-js'

// Initialize the Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const supabase = createClient(supabaseUrl, supabaseKey)

// Function to record sent content
export async function recordSentContent(userId: string, contentUrl: string, contentType: string) {
  const { data, error } = await supabase
    .from('sent_content')
    .insert([
      { user_id: userId, content_url: contentUrl, content_type: contentType }
    ])
  
  if (error) {
    console.error('Error recording sent content:', error)
    throw error
  }
  return data
}

// Function to get previously sent content for a user
export async function getSentContentForUser(userId: string) {
  const { data, error } = await supabase
    .from('sent_content')
    .select('content_url, content_type, sent_date')
    .eq('user_id', userId)
  
  if (error) {
    console.error('Error fetching sent content:', error)
    throw error
  }
  return data
}

// Function to update opened/clicked status
export async function updateContentEngagement(id: string, opened: boolean, clicked: boolean) {
  const { data, error } = await supabase
    .from('sent_content')
    .update({ opened, clicked })
    .eq('id', id)
  
  if (error) {
    console.error('Error updating content engagement:', error)
    throw error
  }
  return data
}