import { ApiError } from "@supabase/supabase-js";
import { useState } from "react";

import { supabase } from "../supabaseClient";

export interface Test {
  /** Was the login successful */
  success: boolean;
  /** Any errors that happened with the call */
  error: ApiError | undefined;
  /** Function to perform the login */
  login: (username: string, password: string) => void;
}

export const useLogin = (): Test => {
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<ApiError>();

  const login = (email: string, password: string): void => {
    supabase.auth
      .signIn({
        email,
        password,
      })
      .then(({ error }) => {
        setSuccess(!error && true);
        setError(error ?? undefined);
      });
  };

  return { success, error, login };
};
