"use client";
import { useState } from "react";

export default function Form() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <form className="flex flex-col w-72 mt-4">
      <input
        type="text"
        name="name"
        placeholder="yourname@upscalegearco.com"
        className="min-w-full p-2 text-center text-black"
      />
      <button
        type="submit"
        disabled={isLoading}
        className="p-3 bg-white text-black mt-6"
      >
        {isLoading ? "Loading..." : "Send"}
      </button>
    </form>
  );
}
