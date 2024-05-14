import React from "react";
import { fMenuLink } from "./data";
import Link from "next/link";

export default function Footer() {
  
  return (
    <div className="fixed p-4 py-6 bottom-0 w-full bg-[#d71e28] left-0 right-0">
      <div className="flex justify-between gap-4 w-full">
        {fMenuLink.map((link, i) => (
          <Link href={link.slug} key={i} className="flex flex-col text-white w-full items-center justify-center">
            <span>{link.icon}</span>
            <span className="text-[16px]">{link.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
