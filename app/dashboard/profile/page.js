"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
const Profile = () => {
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
  console.log(session.user.email);

  // If the session is available, render the profile page
  return (
    <div className="min-h-screen">
      <div className="flex flex-col items-center gap-4 justify-center h-full">
        <h1 className="text-3xl font-bold mt-10">Profile</h1>
        <p className="text-xl font-bold">Welcome, {session.user.name}!</p>
      </div>
      <div className="flex flex-col mx-auto w-1/2 items-center gap-2">
        <div className="flex flex-col ">
          <label className="w-fit" htmlFor="Name">
            Name
          </label>
          <input
            className="bg-[#414248] rounded-lg outline-none p-2 focus:border-blue-900 focus:border-2 h-8 w-96"
            defaultValue={session.user.name}
            type="text"
            id="Name"
          />
        </div>
        <div className="flex flex-col ">
          <label className="w-fit" htmlFor="Email">
            Email
          </label>
          <input
            className="bg-[#646566] rounded-lg outline-none p-2 focus:border-blue-900 focus:border-2 h-8 w-96"
            defaultValue={session.user.email}
            disabled
            type="text"
            id="Email"
          />
        </div>
        <div className="flex flex-col ">
          <label className="w-fit" htmlFor="Username">
            Username
          </label>
          <input
            className="bg-[#414248] rounded-lg outline-none p-2 focus:border-blue-900 focus:border-2 h-8 w-96"
            defaultValue={session.user.name}
            type="text"
            id="Username"
          />
        </div>
        <div className="flex flex-col ">
          <label className="w-fit" htmlFor="pfp">
            Profile Picture
          </label>
          <input
            className="bg-[#414248] rounded-lg outline-none p-2 focus:border-blue-900 focus:border-2 h-8 w-96"
            type="text"
            id="pfp"
          />
        </div>
        <div className="flex flex-col ">
          <label className="w-fit" htmlFor="cover">
            Cover Picture
          </label>
          <input
            className="bg-[#414248] rounded-lg outline-none p-2 focus:border-blue-900 focus:border-2 h-8 w-96"
            type="text"
            id="cover"
          />
        </div>
        <div className="flex flex-col ">
          <label className="w-fit" htmlFor="RazorPayId">
            RazorPay Id
          </label>
          <input
            className="bg-[#414248] rounded-lg outline-none p-2 focus:border-blue-900 focus:border-2 h-8 w-96"
            type="text"
            id="RazorPayId"
          />
        </div>
        <div className="flex flex-col ">
          <label className="w-fit" htmlFor="RazorPaySecret">
            RazorPay Secret
          </label>
          <input
            className="bg-[#414248] rounded-lg outline-none p-2 focus:border-blue-900 focus:border-2 h-8 w-96"
            type="text"
            id="RazorPaySecret"
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
