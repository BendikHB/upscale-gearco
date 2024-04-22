"use client";
import { FormEvent, useState } from "react";

export default function Form({ title }: { title?: string }) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);

  async function handleSubmit(event) {
    setIsLoading(true);
    setShow(false);
    event.preventDefault();
    const formData = new FormData(event.target);
    try {
      const response = await fetch("/api/waitlist", {
        method: "post",
        body: formData,
      });

      if (!response.ok) {
        console.log("falling over");
        throw new Error(`response status: ${response.status}`);
      }
      const responseData = await response.json();
      console.log(responseData["message"]);
      setIsLoading(false);

      alert("Message successfully sent");
    } catch (err) {
      console.error(err);
      setIsLoading(false);
      alert("Error, please try resubmitting the form");
    }
  }

  return (
    <>
      <a className="text-center" onClick={() => setShow(true)}>
        {title ? title : "Show me"}
      </a>
      {show && (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-72 mt-4 text-black"
        >
          <input
            id="waitlist-name"
            type="text"
            name="name"
            autoComplete="name"
            placeholder="name"
            maxLength={50}
            className="min-w-full p-2 text-center mb-2"
          />
          <input
            id="aitlist-email"
            type="email"
            name="email"
            required
            autoComplete="email"
            maxLength={80}
            placeholder="your@mail.com"
            className="min-w-full p-2 text-center"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="p-2 bg-white mt-6 uppercase font-bold"
          >
            {isLoading ? "Loading..." : "join waitlist"}
          </button>
        </form>
      )}
    </>
  );
}
