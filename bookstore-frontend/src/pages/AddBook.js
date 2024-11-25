import React, { useState } from "react";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Usa la variable de entorno para obtener la URL del backend
    const apiURL = `${process.env.REACT_APP_BACKEND_URL}/books`;

    fetch(apiURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, author }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`);
        }
        return response.json();
      })
      .then(() => setMessage("Libro añadido correctamente"))
      .catch((err) => setMessage(`Error al añadir libro: ${err.message}`));
  };

  return (
    <div>
      <h1>Añadir Libro</h1>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Título:
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label>
          Autor:
          <input value={author} onChange={(e) => setAuthor(e.target.value)} />
        </label>
        <button type="submit">Añadir</button>
      </form>
    </div>
  );
};

export default AddBook;
