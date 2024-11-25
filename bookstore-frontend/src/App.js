import React, { useEffect, useState } from 'react';

const App = () => {
  const [books, setBooks] = useState([]); // Estado para almacenar los libros
  const [error, setError] = useState(false); // Estado para manejar errores

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/books`); // Llamada al backend
        if (!response.ok) {
          throw new Error('Failed to fetch books');
        }
        const data = await response.json();
        setBooks(data); // Actualizar el estado con los libros obtenidos
      } catch (err) {
        setError(true); // Actualizar el estado de error si hay fallo
      }
    };
    fetchBooks();
  }, []);

  return (
    <div>
      <h1>Bookstore</h1>
      {error && <p>Could not fetch books from backend.</p>}
      {!error && books.length === 0 && <p>No books available.</p>}
      {!error && books.map((book) => (
        <div key={book._id}>
          <h2>{book.name}</h2>
          <img src={book.image} alt={book.name} width="150" />
          <p>{book.description}</p>
          <p>Author: {book.author}</p>
          <p>Price: {book.price}</p>
          <p>In Stock: {book.countInStock}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
