import React from 'react';
import { Link } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

function ListBook({books ,setBooks}){

    const handleDelete = (id)=>{
        const updatedBooks = books.filter(book=>book.id !== id ); 
        setBooks(updatedBooks);
    }

return(
<div>
      <h1>Liste des livres</h1>
      <Link to="/add"><button className="ui primary button" >Ajouter un livre</button></Link>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Titre</th>
            <th>Auteur</th>
            <th>Editer</th>
            <th>Supprimer</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td><Link  to={`/edit/${book.id}`}><button className="ui  green button">Editer</button></Link></td>
              <td><button className="ui  red button" onClick={() => handleDelete(book.id)}>Supprimer</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default ListBook ; 