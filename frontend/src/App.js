import React, { useState, useEffect } from "react";

const App = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    // Obtener la URL del backend desde el .env
    const apiURL = `${process.env.REACT_APP_BACKEND_URL}/books`;

    console.log("Conectando a la API:", apiURL);

    fetch(apiURL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Datos recibidos:", data);
        setBooks(data);
      })
      .catch((err) => {
        console.error("Error al conectar con el backend:", err.message);
        setError("No se pudo conectar con el backend.");
      });
  }, []);

  return (
    <div>
      <h1>Bookstore</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {books.length > 0 ? (
          books.map((book) => (
            <li key={book._id}>{book.title}</li>
          ))
        ) : (
          <p>No hay libros disponibles.</p>
        )}
      </ul>
    </div>
  );
};

export default App;
