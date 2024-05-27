import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://cwacyqbouybcofjvllap.supabase.co";
const supabaseKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);
