import { AppProps } from "next/app";

import { supabase } from "@/api";
import { toast } from "react-toastify";

export const AuthRoute = async (Component: any) => {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return (props: AppProps) => {
    if (!user)
      return toast.error("you are not authenticated! behave yourself!");

    return <Component {...props} />;
  };
};
