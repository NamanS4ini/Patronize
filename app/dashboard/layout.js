"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const layout = ({ children }) => {
    const { data: session, status } = useSession();
    const router = useRouter();
  
    // If the session is loading, show a loading state
    if (status === "loading") {
      return <div>Loading...</div>;
    }
  
    // If the session is not available, redirect to the login page
    if (!session) {
      router.push("/login");
      return null; // Ensure nothing is rendered during the redirect
    }
  const pathname = usePathname();
  return (
    <div>
      <div className=" flex text-center items-center h-8 bg-gray-800 text-white">
        <Link className="w-1/2 flex justify-center" href={"/dashboard/profile"}>
          <div
            className={
              pathname == "/dashboard/profile"
                ? "font-bold border-b-2 border-blue-400"
                : ""
            }
          >
            Profile
          </div>
        </Link>
        <div className="w-px rounded-lg bg-blue-300 h-[60%]"></div>
        <Link
          className="w-1/2 flex justify-center"
          href={`/${session.user.name}`}
        >
          <div
            className={
              pathname == "/dashboard/yourpage"
                ? "font-bold border-b-2 border-blue-400"
                : ""
            }
          >
            Your Page
          </div>
        </Link>
      </div>
      {children}
    </div>
  );
};

export default layout;
