"use client";
import { usePathname } from "next/navigation";

export const PathName = () => {
  const pathName = usePathname();
  console.log(pathName);
  return <span>... {pathName === '/' ? '/home' : pathName.replaceAll('-', ' ')} ...</span>;
}