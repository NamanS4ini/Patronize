"use client"
import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation'

const Profile = () => {
  const { data: session } = useSession();
  const router = useRouter()
  if(session){
  return <div>
    <span>Hello {session.user.name}</span>
  </div>;
  }
  else{
    router.push('/login')
  }
};

export default Profile;
