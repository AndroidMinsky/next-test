"use client";

import { usePathname } from "next/navigation";
import React from "react";

export default function Title() {
  const pathname = usePathname();

  return (
    <header className="bg-white shadow-sm">
      <div className="mx-auto max-w-7xl py-4 px-4 sm:px-6 lg:px-8">
        <h1 className="text-lg font-semibold leading-6 text-gray-900">
          {pathname === "/" ? "Main Page" : "Items"}
        </h1>
      </div>
    </header>
  );
}
