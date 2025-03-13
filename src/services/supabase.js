import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://zwbvjxitbdynxizarxfb.supabase.co";
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3YnZqeGl0YmR5bnhpemFyeGZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDExMjYzMDMsImV4cCI6MjA1NjcwMjMwM30.w5MVh7fYf8QQvOvD2fURUSFuAFuPJKjS5ObZUZM41jY`;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
