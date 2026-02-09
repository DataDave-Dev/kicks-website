import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  "https://itndfmljjppgcgmnvibs.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0bmRmbWxqanBwZ2NnbW52aWJzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY2NTMwMTQsImV4cCI6MjA2MjIyOTAxNH0.zjhOG2CGDjILU3ARuk_1qgkkzsuK4jSp8V3yLnGhUEs"
);

export { supabase as s };
