"use client"

import { usePathname } from "next/navigation";

export default function layout({ children }) {
      const path = usePathname()

  return (
    <>
    {
     path === "/About"? null:
         <h1>  i am nested Layout</h1>
    }
    {children}
    </>
  );
}
