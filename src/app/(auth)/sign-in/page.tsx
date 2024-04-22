"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Component() {
  const { data: session } = useSession();
  if (session) {
    <button onClick={() => signOut()}>Sign Out</button>;
  }
  return (
    <>
      Not Signed in <br />
      <button
        onClick={() => signIn()}
        className="bg-orange-500 px-3 py-1 m-4 rounded"
      >
        Sign in
      </button>
    </>
  );
}
