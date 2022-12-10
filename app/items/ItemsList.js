import React from "react";

const files = [
  {
    title: "IMG_4985.HEIC",
    size: "3.9 MB",
    source:
      "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
  },
  // More files...
];

async function getItems() {
  const res = await fetch("https://fortniteapi.io/v2/items/upcoming?lang=en", {
    headers: { Authorization: "0e35f61e-772d4b2f-35245465-f8b6c26c" },
  });

  if (!res.ok) throw new Error("Failed to fetch the data");

  return res.json();
}

export default async function ItemsList() {
  const { items } = await getItems();
  return (
    <ul
      role="list"
      className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
    >
      {items.map((item) => (
        <li key={item.id} className="relative">
          <div className="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
            <img
              src={item.images.icon}
              alt=""
              className="pointer-events-none object-cover group-hover:opacity-75"
            />
            <button
              type="button"
              className="absolute inset-0 focus:outline-none"
            >
              <span className="sr-only">View details for {item.name}</span>
            </button>
          </div>
          <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
            {item.name}
          </p>
          <p className="pointer-events-none block text-sm font-medium text-gray-500">
            {item.description}
          </p>
        </li>
      ))}
    </ul>
  );
}