// src/pages/BookDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BookDetail = () => {
  const { id } = useParams(); // Extrae el ID del libro desde la URL
  const [book, setBook] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true); // Controla el estado de carga

  useEffect(() => {
    const fetchBook = async () => {
      try {
        // Llama al backend usando la variable de entorno para la URL
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/books/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch book details');
        }
        const data = await response.json();
        setBook(data); // Actualiza el estado con los detalles del libro
      } catch (err) {
        console.error('Error fetching book:', err);
        setError(true); // Marca error si la llamada falla
      } finally {
        setLoading(false); // Detiene el indicador de carga
      }
    };
    fetchBook();
  }, [id]);

  if (loading) {
    return <div className="container mt-4"><h1>Loading...</h1></div>;
  }

  if (error) {
    return <div className="container mt-4"><h1>Error fetching book details</h1></div>;
  }

  if (!book) {
    return <div className="container mt-4"><h1>No book found</h1></div>;
  }

  return (
    <div className="container mt-4">
      <h1>{book.name}</h1>
      <img 
        src={book.image || 'https://via.placeholder.com/150'} 
        alt={book.name} 
        className="img-fluid mb-4" 
        style={{ maxHeight: '400px', maxWidth: '100%' }}
      />
      <p><strong>Description:</strong> {book.description}</p>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Price:</strong> {book.price}</p>
      <p><strong>In Stock:</strong> {book.countInStock}</p>
    </div>
  );
};

export default BookDetail;
