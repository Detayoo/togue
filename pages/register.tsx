import { useState } from "react";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";

import { signUpFn } from "@/api";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { mutateAsync } = useMutation({
    mutationFn: signUpFn,
    onSuccess: ({ error }) => {
      if (error) {
        return toast.error(`oops, ${error?.message?.toLowerCase()}`);
      }
      toast.success("dear cool kid, there's something waiting in your mail");
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
