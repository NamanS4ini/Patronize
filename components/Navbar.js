"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();
  return (
    <nav className="bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_85%,rgba(120,119,198,0.3),rgba(255,255,255,0))] z-10 h-16 sticky top-0 flex items-center px-4 justify-between text-white">
      <Link href={"/"}>
        <div className="font-bold text-xl">
          <div className="flex items-center gap-2">
            <Image src="/favicon.ico" width={40} height={40} alt="logo" />
            <span>Patronize</span>
          </div>
        </div>
      </Link>
      <div className="flex gap-5 justify-center items-center h-full">
        {session && <span>Hello {session.user.name}</span>}
        <Link href={"/login"}>
          {!session ? (
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-bold text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Log in
              </span>
            </button>
          ) : (
            <div>
              <button
                onClick={() => signOut()}
                className="relative font-bold inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm text-gray-900 rounded-lg group bg-gradient-to-br from-red-500 to-pink-400 group-hover:from-red-500 group-hover:to-pink-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-red-200 dark:focus:ring-red-800"
              >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Log Out
                </span>
              </button>
            </div>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
