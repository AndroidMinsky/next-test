"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Filter from "./Filter";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "./Modal";
import { useSearchParams } from "next/navigation";

export default function ItemsList(props) {
  const [items, setItems] = useState(props.items);
  const [filteredItems, setFilteredItems] = useState(props.items);
  const [genre, setGenre] = useState("All");
  const searchParams = useSearchParams();

  const item = searchParams.get("item");

  useEffect(() => {
    if (genre === "All") {
      setFilteredItems(items);
      return;
    }
    const filtered = items.filter((item) => item.rarity.id == genre);
    setFilteredItems(filtered);
  }, [genre]);

  return (
    <>
      {/* {item && <Modal />} */}
      <Filter genre={genre} setGenre={setGenre} />
      <motion.ul
        layout
        role="list"
        className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8 pt-6"
      >
        <AnimatePresence>
          {filteredItems.map((item) => (
            <motion.li
              layout
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              key={item.id}
              className="relative"
            >
              <Link href={`item/${item.id}`}>
                <div className="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                  <img src={item.images.icon} alt="" />
                  <button
                    type="button"
                    className="absolute inset-0 focus:outline-none"
                  >
                    <span className="sr-only">
                      View details for {item.name}
                    </span>
                  </button>
                </div>
              </Link>
              <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
                {item.name}
              </p>
              <p className="pointer-events-none block text-sm font-medium text-gray-500">
                {item.description}
              </p>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </>
  );
}
