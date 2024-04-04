"use client";
import { signOut } from "@/app/supabase/supaBae";

export default function SignOutBtn() {
  function LogOut() {
    signOut();
    console.log("Logged out");
  }

  return <button onClick={LogOut}>OUT</button>;
}
