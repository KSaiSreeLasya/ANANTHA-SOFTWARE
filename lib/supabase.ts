
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://shozruvlgahshkmkzxft.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNob3pydXZsZ2Foc2hrbWt6eGZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY0Njg3MTEsImV4cCI6MjA4MjA0NDcxMX0.hCnZJRsLy1R6_mqomhXlDnL8uzmcJppCtxkv4eeElDE';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
