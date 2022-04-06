import { createClient } from "@supabase/supabase-js";

/**
 * Disable ts and eslint for the import of these constants
 */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
// @ts-ignore
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
/* eslint-enable @typescript-eslint/ban-ts-comment */

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
