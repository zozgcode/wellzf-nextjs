"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import usersData from "./users.json";
import Header from "../header/Header";
import Image from "next/image";

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const user = usersData.users.find(
      (user: any) => user.username === username
    );
    if (!user) {
      setError("User not found");
      setLoading(false);
      return;
    }
    if (user.password !== password) {
      setError("Invalid password");
      setLoading(false);
      return;
    }
    // Store user data in localStorage
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    router.push("/accounts");
    setLoading(false);
  };

  return (
    <div className="">
      <Header />
      <div className="h-screen bg-white">
        <div className="pt-10">
          {error && (
            <p className="text-[20px] my-4 text-center mx-auto max-w-[200px] flex items-center justify-center text-[#d71e28]">
              {error}
            </p>
          )}
          <div className="bg-white mx-auto rounded-xl max-w-[400px] p-7">
            <form onSubmit={handleLogin}>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                  <label
                    htmlFor="Username"
                    className="text-[#5c5c5c] text-[16px]"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    value={username}
                    className="p-5 py-3 rounded-[10px] text-[#5c5c5c] bg-transparent border border-gray-300 outline-none"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label
                    htmlFor="password"
                    className="text-[#5c5c5c] text-[16px]"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    className="p-5 py-3 rounded-[10px] text-[#5c5c5c] bg-transparent border border-gray-300 outline-none"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="text-base flex items-center">
                  Remember Me
                  <input type="checkbox" className="ml-2" />
                  <span className="checkmark"></span>
                </label>
              </div>

              <div className="flex flex-col gap-2 mt-6">
                <button
                  type="submit"
                  className="p-4 py-3 bg-[#d71e28] font-bold w-full rounded-[10px] text-white"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
