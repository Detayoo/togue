import { supabase } from "../supaClient";

export const loginFn = async ({
  payload,
}: {
  payload: {
    email: string;
    password: string;
  };
}) => {
  const response = await supabase.auth.signInWithPassword(payload);
  return response;
};

export const signUpFn = async ({
  payload,
}: {
  payload: {
    email: string;
    password: string;
  };
}) => {
  const response = await supabase.auth.signUp(payload);
  return response;
};
