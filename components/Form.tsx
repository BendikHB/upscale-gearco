"use client";
import { useState } from "react";

export default function Form({ title }: { title?: string }) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);

  return (
    <>
      <a className="text-center" onClick={() => setShow(true)}>
        {title ? title : "Show me"}
      </a>
      {show && (
        <form className="flex flex-col w-72 mt-4 text-black">
          <input
            type="text"
            name="name"
            placeholder="name"
            className="min-w-full p-2 text-center mb-2"
          />
          <input
            type="email"
            name="email"
            placeholder="your@mail.com"
            className="min-w-full p-2 text-center"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="p-2 bg-white mt-6 uppercase font-bold"
            onClick={() => setShow(false)}
          >
            {isLoading ? "Loading..." : "join waitlist"}
          </button>
        </form>
      )}
    </>
  );
}
