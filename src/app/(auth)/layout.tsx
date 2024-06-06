import { currentUser } from "@clerk/nextjs/server";
import React from "react";
export default function layout({ children }: { children: React.ReactNode }) {
  const user = currentUser();
  return <div className="">{children}</div>;
}
