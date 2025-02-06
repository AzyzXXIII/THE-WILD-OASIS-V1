import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://dqckydbrtbzoquztptzi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRxY2t5ZGJydGJ6b3F1enRwdHppIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg3OTcxMzAsImV4cCI6MjA1NDM3MzEzMH0.nFLbqjM1qDbVAikINZlLUFQHXwZ4Zz8lFwKfu9vnleo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
