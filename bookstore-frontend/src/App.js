// src/App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importa las rutas
import Navbar from './components/Navbar'; // Asegúrate de que Navbar.js esté en src/components
import AddBook from './pages/AddBook'; // Asegúrate de que AddBook.js esté en src/pages
import './App.css';

const App = () => {
  const [books, setBooks] = useState([]); // Estado para almacenar los libros
  const [error, setError] = useState(false); // Estado para manejar errores

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/books`);
        if (!response.ok) {
          throw new Error('Failed to fetch books');
        }
        const data = await response.json();
        setBooks(data);
      } catch (err) {
        setError(true);
      }
    };
    fetchBooks();
  }, []);

  return (
    <Router>
      <div>
        <Navbar />
        <div className="container mt-4">
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <h1 className="text-center">Bookstore</h1>
                  {error && <div className="alert alert-danger">Could not fetch books from backend.</div>}
                  {!error && books.length === 0 && <div className="alert alert-info">No books available.</div>}
                  {!error && books.length > 0 && (
                    <div className="row">
                      {books.map((book) => (
                        <div className="col-md-4" key={book._id}>
                          <div className="card mb-4 shadow-sm">
                            <img
                              src={book.image}
                              alt={book.name}
                              className="card-img-top"
                              style={{ height: '200px', objectFit: 'cover' }}
                            />
                            <div className="card-body">
                              <h5 className="card-title">{book.name}</h5>
                              <p className="card-text">{book.description}</p>
                              <p className="text-muted">Author: {book.author}</p>
                              <p className="text-primary">Price: {book.price}</p>
                              <p className="text-success">In Stock: {book.countInStock}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              }
            />
            <Route path="/add" element={<AddBook />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
