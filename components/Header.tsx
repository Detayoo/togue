import Router from "next/router";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { Logo } from ".";
import { useAuth } from "@/contexts";
import { logoutFn } from "@/api";

export const Header = () => {
  const { user } = useAuth();
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation({
    mutationFn: logoutFn,
    onSuccess: () => {
      toast.success("hate to see you go, cool kid! :(");
      queryClient.invalidateQueries({
        queryKey: ["user check"],
      });
    },

    onError: (error) => {
      toast.error(error?.message);
    },
  });
  const logout = async () => {
    try {
      await mutateAsync();
    } catch (error) {}
  };

  return (
    <div className="flex justify-between items-center bg-white min-h-[10vh] m:border-b m:px-6">
      <Logo />
      <div className="flex items-center gap-x-6 m:hidden">
        <button onClick={user ? logout : () => Router.push("/login")}>
          {user ? "logout" : "login"}
        </button>
        {!user && (
          <button onClick={() => Router.push("/register")}>register</button>
        )}
        {!user && <p>join waitlist</p>}
        <button>contact us</button>
      </div>
    </div>
  );
};
