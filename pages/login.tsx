import { useState } from "react";
import Router from "next/router";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";

import { loginFn } from "@/api";
import { BlackButton, BottomSheet } from "@/components";
import { useBodyScrollLock } from "@/hooks";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  useBodyScrollLock(showModal);

  const { mutateAsync, isPending } = useMutation({
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
      className="flex justify-center items-center h-screen w-full"
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
          label="let's go!"
          disabled={isPending}
        />

        <p className="text-sm">
          have no account?{" "}
          <button type="button" onClick={() => Router.push("/register")}>
            register
          </button>
        </p>
      </div>
      <BottomSheet showModal={showModal} closeModal={() => setShowModal(false)}>
        <div className="">hey you</div>
      </BottomSheet>
    </form>
  );
};

export default Login;
