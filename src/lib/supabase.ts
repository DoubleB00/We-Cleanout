import { createClient, SupabaseClient } from '@supabase/supabase-js';

function getEnv(name: string): string | undefined {
  const value = import.meta.env[name];
  return typeof value === 'string' && value.trim() !== '' ? value.trim() : undefined;
}

const supabaseUrl = getEnv('VITE_SUPABASE_URL');
const supabaseAnonKey = getEnv('VITE_SUPABASE_ANON_KEY');

export const SUPABASE_ENABLED = Boolean(supabaseUrl && supabaseAnonKey);

if (!SUPABASE_ENABLED) {
  console.warn(
    '[We Cleanout Junk] Supabase env vars missing. ' +
    'Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in Vercel to enable database features.'
  );
}

export const supabase: SupabaseClient | null = SUPABASE_ENABLED
  ? createClient(supabaseUrl!, supabaseAnonKey!)
  : null;
