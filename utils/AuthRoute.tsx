import { FC } from "react";
import { toast } from "react-toastify";
import Router from "next/router";
import { useQuery } from "@tanstack/react-query";

import { checkUserFn } from "@/api";
import { Spinner } from "@/components";
import { AuthRouteProps } from "@/types";

export const AuthRoute: FC<AuthRouteProps> = ({ children }) => {
  const { isFetching, data } = useQuery({
    queryKey: ["user check"],
    queryFn: checkUserFn,
  });

  if (isFetching) return <Spinner />;

  // if (data?.error?.message) {
  //   if (data?.error?.message?.toLowerCase() === "auth session missing!") {
  //     toast.error("you are not authenticated, behave yourself");
  //     Router.push("/login");
  //     return;
  //   } else return toast.error(data?.error?.message?.toLowerCase());
  // }

  return <>{children}</>;
};
