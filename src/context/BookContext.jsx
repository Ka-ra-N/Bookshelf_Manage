import React, { createContext, useState, useEffect } from "react";

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [allBooks, setAllBooks] = useState([]);
  const [books, setBooks] = useState([]);
  const [bookshelf, setBookshelf] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchBooks = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://openlibrary.org/search.json?q=YOUR_QUERY&limit=10&page=1"
      );
      const data = await response.json();
      setAllBooks(data.docs);
      setBooks(data.docs);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const filterBooks = (query) => {
    if (query) {
      const filtered = allBooks.filter((book) =>
        book.title.toLowerCase().includes(query.toLowerCase())
      );
      setBooks(filtered);
    } else {
      setBooks(allBooks);
    }
  };

  const addToBookshelf = (book) => {
    const updatedBookshelf = [...bookshelf, book];
    setBookshelf(updatedBookshelf);
    localStorage.setItem("bookshelf", JSON.stringify(updatedBookshelf));
  };

  const removeFromBookshelf = (book) => {
    const updatedBookshelf = bookshelf.filter((b) => b.key !== book.key);
    setBookshelf(updatedBookshelf);
    localStorage.setItem("bookshelf", JSON.stringify(updatedBookshelf));
  };

  useEffect(() => {
    fetchBooks();
    const storedBookshelf = JSON.parse(localStorage.getItem("bookshelf"));
    if (storedBookshelf) {
      setBookshelf(storedBookshelf);
    }
  }, []);

  return (
    <BookContext.Provider
      value={{
        books,
        loading,
        error,
        filterBooks,
        addToBookshelf,
        removeFromBookshelf,
        bookshelf,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};
