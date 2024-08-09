import { useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form autoComplete="off">
      <input
        type="email"
        className="h-11"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        className="h-11"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button>Submit</button>
    </form>
  );
};
