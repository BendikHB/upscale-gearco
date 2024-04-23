"use client";

import React, { useState } from "react";

const PasswordProtect = () => {
  const [password, setPassword] = useState("");
  const [passwordIncorrect, setPasswordIncorrect] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const request = await fetch(`/api/login`, {
      body: JSON.stringify({ password }),
      headers: { "Content-Type": "application/json" },
      method: "post",
    });

    if (request.status !== 200) {
      return setPasswordIncorrect(true), setLoading(false);
    } else {
      window.location.reload();
    }
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="font-bold font-Prototype text-xl xl:text-2xl w-4/5 mx-auto"
      >
        <input
          type="password"
          id="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="appearance-none text-center p-2 bg-transparent border-b-2 border-white placeholder:text-white w-3/4"
        />
        <button
          type="submit"
          disabled={loading}
          className="px-2 py-2 bg-white text-black border-2 border-white transition duration-200 hover:bg-dark hover:text-white w-1/4"
        >
          enter
        </button>
      </form>
    </div>
  );
};

export default PasswordProtect;
