import logo from './logo.svg';
import './App.css';
import React , {useState} from 'react';
import ListBook from './components/ListBook';
import AddBook from './components/AddBook';
import EditBook from './components/EditBook';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
function App() {
  const [books, setBooks]=useState([
     {id:1 , title : "Atomic habits", author: "James Clear"},
     {id:2 , title : "The Slight Edge", author: "Jeff Olsen"},
     {id:3 , title : "La Gloire de mon Pére", author: "Marcel Pagnol"},
     {id:4 , title : "Les Misérables", author: "Vicotor hugo"}
  ]);

  return (
    <Router>
    <div>
      <Routes>
        <Route path="/" element={<ListBook books={books} setBooks={setBooks} />} />
        <Route path="/add" element={<AddBook books={books} setBooks={setBooks} />} />
        <Route path="/edit/:id" element={<EditBook books={books} setBooks={setBooks} />} />
      </Routes>
    </div>
  </Router>
);
}

export default App;
