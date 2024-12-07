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

export const checkUserFn = async () => {
  const { data, error } = await supabase.auth.getUser();
  return { data, error };
};

export const logoutFn = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
};

export const getClientsFn = async ({
  start,
  end,
}: {
  start?: number;
  end?: number;
}) => {
  const { data, error } = await supabase
    .from("clients")
    .select("*")
    .range(start ?? 0, end ?? 10);
  if (error) throw error;
  return data;
};

export const addClientFn = async () => {
  const { data, error } = await supabase
    .from("clients")
    .insert({
      id: "2603a1bf-7854-4241-81eb-9adaedf7a810",
      created_at: new Date(),
      email: "maulguy@g2mail.com",
      is_active: true,
    })
    .select("*")
    .single();

  if (error) throw error;

  return data;
};

export const deleteClientFn = async ({ clientId }: { clientId: string }) => {
  const { data, error } = await supabase
    .from("clients")
    .delete()
    .match({ id: clientId });
  if (error) throw error;

  return data;
};

export const updateClientFn = async ({ clientId }: { clientId: string }) => {
  const { data, error } = await supabase
    .from("clients")
    .update({
      is_active: false,
    })
    .match({ id: clientId });
  if (error) throw error;

  return data;
};
