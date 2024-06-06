import NavBar from "@/components/NavBar";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";
export default function layout({ children }: { children: React.ReactNode }) {
  const user = currentUser();

  return (
    <div className="">
      <NavBar></NavBar>
      <div className="mx-auto px-4"> {children}</div>
    </div>
  );
}
