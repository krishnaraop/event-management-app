import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://mpovtytzwnxzpncdcmfs.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '';

const supabase = createClient(supabaseUrl, supabaseKey);

// const supabase = createClient(SUPABASE_URL, process.env.SUPABASE_KEY);
export default supabase;