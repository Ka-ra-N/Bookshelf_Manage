import React, { useState } from "react";
import Search from "./components/Search";
import BookList from "./components/BookList";
import Bookshelf from "./components/BookShelf";

function App() {
  const [showBookshelf, setShowBookshelf] = useState(false);

  return (
    <div className="App">
      <Search />
      <button
        className="rounded-xl outline-none mt-10 bg-[#54299e] text-white border border-zinc-700 hover:invert duration-300"
        onClick={() => setShowBookshelf(!showBookshelf)}
      >
        {showBookshelf ? "Show Search Results" : "Show My Bookshelf"}
      </button>
      {showBookshelf ? <Bookshelf /> : <BookList />}
    </div>
  );
}

export default App;
