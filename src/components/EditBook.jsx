import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
function EditBook({ books, setBooks }) {

  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState({ title: '', author: '' });

  useEffect(() => {
    const bookToEdit = books.find(book => book.id === parseInt(id));
    if (bookToEdit) {
      setBook(bookToEdit);
    }
  }, [id, books])

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedBooks = books.map(b =>
      b.id === parseInt(id) ? book : b
    );
    setBooks(updatedBooks);
    navigate('/');
  };


  return (
    <div>
      <h2>Modifier le livre</h2>
      <form onSubmit={handleSubmit}>
        <div >
          <label>Titre : </label>
          <input
            type="text"
            value={book.title}
            onChange={(e) => setBook({ ...book, title: e.target.value })}
          />
        </div>
        <div >
          <label>Auteur : </label>
          <input
            type="text"
            value={book.author}
            onChange={(e) => setBook({ ...book, author: e.target.value })}
          />
        </div>
        <button className="ui primary button" type="submit">Modifier</button>
      </form>
    </div>
  );
}

export default EditBook;