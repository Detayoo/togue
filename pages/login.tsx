import { useState } from "react";
import Router from "next/router";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";

import { loginFn } from "@/api";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { mutateAsync } = useMutation({
    mutationFn: loginFn,
    onSuccess: ({ error }) => {
      if (error?.message?.toLowerCase() == "email not confirmed") {
        return toast.error(
          "dear cool kid, how about you check your mail for the last mail we sent to you"
        );
      }
      if (error) {
        return toast.error(
          `dear cool kid, you have ${error?.message?.toLowerCase()}`
        );
      }
      Router.push("/");
      return toast.success("welcome back, cool kid");
    },
    onError: (error) => {
      toast.error(error?.message);
    },
  });

  const handleLogin = async (e: any) => {
    e.preventDefault();
    try {
      await mutateAsync({
        payload: { email, password },
      });
    } catch (error) {}
  };
  return (
    <form
      onSubmit={handleLogin}
      autoComplete="off"
      className="flex gap-y-4 flex-col justify-center items-center h-screen"
    >
      <input
        type="email"
        className="h-11 bg-slate-200"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        className="h-11 bg-slate-200"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button>Submit</button>
    </form>
  );
};

export default Login;
