"use client";

export default function Filter({ setGenre, genre }) {
  return (
    <header className="bg-gray-100 shadow-sm rounded-lg ">
      <div className="mx-auto max-w-7xl py-4 px-4 sm:px-6 lg:px-8">
        <h1 className="text-lg font-semibold leading-6 text-gray-900 ">
          <button
            type="button"
            className={`inline-flex items-center rounded border border-transparent ${
              genre === "All"
                ? "bg-gray-600 hover:bg-gray-700"
                : "bg-gray-400 hover:bg-gray-500"
            } px-2.5 py-1.5 text-xs font-medium text-white shadow-sm focus:outline-none mr-3`}
            onClick={() => setGenre("All")}
          >
            All
          </button>
          <button
            type="button"
            className={`inline-flex items-center rounded border border-transparent ${
              genre === "Uncommon"
                ? "bg-gray-600 hover:bg-gray-700"
                : "bg-gray-400 hover:bg-gray-500"
            } px-2.5 py-1.5 text-xs font-medium text-white shadow-sm focus:outline-none mr-3`}
            onClick={() => setGenre("Uncommon")}
          >
            Uncommon
          </button>
          <button
            type="button"
            className={`inline-flex items-center rounded border border-transparent ${
              genre === "Epic"
                ? "bg-gray-600 hover:bg-gray-700"
                : "bg-gray-400 hover:bg-gray-500"
            } px-2.5 py-1.5 text-xs font-medium text-white shadow-sm focus:outline-none`}
            onClick={() => setGenre("Epic")}
          >
            Epic
          </button>
        </h1>
      </div>
    </header>
  );
}
