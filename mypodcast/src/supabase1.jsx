import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://wfezbpwlziionpqsjnjo.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndmZXpicHdsemlpb25wcXNqbmpvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE0NTY0NzgsImV4cCI6MjAxNzAzMjQ3OH0.XK9w3qUA0RsVlroL9F8nqD3NSZ2vceYUS-rEzt7JbEM'

const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default supabase
