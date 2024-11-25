import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const BookDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/books/${id}`)
      .then((response) => setBook(response.data))
      .catch((error) => console.error("Error fetching book details:", error));
  }, [id]);

  const deleteBook = () => {
    axios
      .delete(`http://localhost:5000/api/books/${id}`)
      .then(() => navigate("/"))
      .catch((error) => console.error("Error deleting book:", error));
  };

  if (!book) return <div>Loading...</div>;

  return (
    <div>
      <h1>{book.title}</h1>
      <p>Author: {book.author}</p>
      <button className="btn btn-danger" onClick={deleteBook}>
        Delete
      </button>
    </div>
  );
};

export default BookDetail;
