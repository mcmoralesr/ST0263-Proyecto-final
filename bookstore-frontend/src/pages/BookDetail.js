// src/pages/BookDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/books/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch book details');
        }
        const data = await response.json();
        setBook(data);
      } catch (err) {
        setError(true);
      }
    };
    fetchBook();
  }, [id]);

  if (error) {
    return <div className="container mt-4"><h1>Error fetching book details</h1></div>;
  }

  if (!book) {
    return <div className="container mt-4"><h1>Loading...</h1></div>;
  }

  return (
    <div className="container mt-4">
      <h1>{book.name}</h1>
      <img src={book.image || 'https://via.placeholder.com/150'} alt={book.name} className="img-fluid" />
      <p>{book.description}</p>
      <p>Author: {book.author}</p>
      <p>Price: {book.price}</p>
      <p>In Stock: {book.countInStock}</p>
    </div>
  );
};

export default BookDetail;
