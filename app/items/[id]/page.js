"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function Item({ params: { id } }) {
  const router = useRouter();
  return (
    <div>
      <header className="bg-gray-100 shadow-sm rounded-lg">
        <div className="mx-auto max-w-7xl py-4 px-4 sm:px-6 lg:px-8">
          <h1 className="text-lg font-semibold leading-6 text-gray-900 ">
            <button
              onClick={() => router.push("/items")}
              type="button"
              className="inline-flex items-center rounded border border-transparent bg-gray-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mr-3"
            >
              Back
            </button>
          </h1>
        </div>
      </header>
      <div className="bg-gray-100 shadow-sm rounded-lg mt-6 p-6">{id}</div>
    </div>
  );
}
