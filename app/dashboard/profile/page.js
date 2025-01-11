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

  // If the session is available, render the profile page
  return (
    <div>
      <span>Hello {session.user.name}</span>
    </div>
  );
};

export default Profile;
