import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

function AddBook({books,setBooks}){
    const [title,setTitle] = useState("");
    const [author,setAuthor] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const newBook = {
            id : books.length +1 ,
            title : title,
            author : author};
            setBooks([...books , newBook]); 
            navigate('/')
    }
    return (
        <div>
          <h2>Ajouter un livre</h2>
          <form onSubmit={handleSubmit}>
            <div  className="field column">
              <label>Titre : </label>
              <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="field column">
              <label>Auteur : </label>
              <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
            </div>
            <button type="submit">Ajouter</button>
          </form>
        </div>
      );
    }
    
    export default AddBook;
    
