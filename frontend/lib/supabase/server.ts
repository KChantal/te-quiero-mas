import { createClient } from '@supabase/supabase-js';

export default function createSupabaseServerClient() {
  // ensure these env vars exist in .env.local
  const publicUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

  if (!publicUrl || !key) {
    throw new Error(
      'Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY'
    );
  }

  return createClient(publicUrl, key, {
    // server-side, no local session persistence needed (To Add Later)
    auth: { persistSession: false },
  });
}
