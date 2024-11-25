import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/books") // Endpoint del backend
      .then((response) => setBooks(response.data))
      .catch((error) => console.error("Error fetching books:", error));
  }, []);

  return (
    <div>
      <h1>Books</h1>
      <div className="list-group">
        {books.map((book) => (
          <Link
            key={book._id}
            to={`/books/${book._id}`}
            className="list-group-item list-group-item-action"
          >
            {book.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
