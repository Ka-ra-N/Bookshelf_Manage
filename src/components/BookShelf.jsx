import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";

const Bookshelf = () => {
  const { bookshelf, removeFromBookshelf } = useContext(BookContext);

  if (bookshelf.length === 0) return <p className="mt-10">Your bookshelf is empty.</p>;

  return (
    <div className="bookshelf grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
      {bookshelf.map((book) => (
        <div
          key={book.key}
          className="bg-[#1E293B] border border-zinc-700 rounded-2xl p-10"
        >
          <h2>{book.title}</h2>
          <p>
            {book.author_name ? book.author_name.join(", ") : "Unknown Author"}
          </p>
          <p className="text-zinc-400 text-xs mt-5">
            Book Published 👉🏻 {book.publish_date}
          </p>
          <button
            className="bg-[#EF4444] text-white px-6 py-2 rounded-lg mt-5 hover:invert duration-300"
            onClick={() => removeFromBookshelf(book)}
          >
            Remove from Book Shelf
          </button>
        </div>
      ))}
    </div>
  );
};

export default Bookshelf;
