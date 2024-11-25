// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ books }) => {
  return (
    <div className="container mt-4">
      <h1 className="text-center">Bookstore</h1>
      <div className="row">
        {books.map((book) => (
          <div className="col-md-4" key={book._id}>
            <div className="card mb-4 shadow-sm">
              <img
                src={book.image || 'https://via.placeholder.com/150'} // Imagen predeterminada si no hay imagen
                alt={book.name}
                className="card-img-top"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{book.name}</h5>
                <p className="card-text">{book.description}</p>
                <Link to={`/book/${book._id}`} className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
