import { useState } from "react";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import Router from "next/router";

import { signUpFn } from "@/api";
import { BlackButton, PageTitle } from "@/components";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { mutateAsync, isPending } = useMutation({
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
    <>
      <PageTitle name="Get in!" />
      <form
        onSubmit={handleLogin}
        autoComplete="off"
        className="flex gap-y-4 flex-col justify-center items-center h-screen"
      >
        <div className="flex gap-y-4 flex-col">
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

          <BlackButton
            // onClick={() => setShowModal(true)}
            // type="button"
            label="join the cool kids!"
            disabled={isPending}
            icon
          />

          <p className="text-sm">
            already a cool kid??{" "}
            <button type="button" onClick={() => Router.push("/login")}>
              login
            </button>
          </p>
        </div>
      </form>
    </>
  );
};

export default Login;
