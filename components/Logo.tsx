import Router from "next/router";

export const Logo = () => (
  <p
    onClick={() => Router.push("/")}
    className="text-[20px] uppercase cursor-pointer"
  >
    togue
  </p>
);
