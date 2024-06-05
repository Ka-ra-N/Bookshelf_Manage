import React, { useState, useContext } from "react";
import { BookContext } from "../context/BookContext";

const Search = () => {
  const [query, setQuery] = useState("");
  const { filterBooks } = useContext(BookContext);

  const handleSearch = (e) => {
    e.preventDefault();
    filterBooks(query);
  };

  return (
    <div className="flex justify-between gap-8">
      <form onSubmit={handleSearch} className="flex-1 flex gap-3">
        <input
          className="rounded-xl outline-none focus:placeholder:opacity-0 duration-300 bg-[#1C192E] text-white border border-zinc-700 flex-1 p-3"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for books..."
        />
        <button
          type="submit"
          className="rounded-xl outline-none bg-[#5f9de4] text-white border border-zinc-700 hover:scale-95 duration-300"
        >
          Search
        </button>
      </form>
      
    </div>
  );
};

export default Search;
