import { Session, User } from "@supabase/supabase-js";

import { supabase } from "../supabaseClient";

export const useUserDetails = (): {
  /** The logged in user */
  user: User | undefined;
  /** The active session */
  session: Session | undefined;
} => ({
  user: supabase.auth.user() ?? undefined,
  session: supabase.auth.session() ?? undefined,
});
