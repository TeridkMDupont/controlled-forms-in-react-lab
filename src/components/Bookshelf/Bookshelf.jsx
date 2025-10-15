import { useState } from "react";


const Bookshelf = () => {
const [books, setBooks] = useState([]);
const [newBook, setNewBook] = useState({
    title: '',
    author: '',
});

const handleInputChange = (event) => {
    setNewBook({...newBook, [event.target.name]: event.target.value});
};

const handleSubmit = (event) => {
    event.preventDefault();
    setBooks((prevBooks) => [...prevBooks, newBook]);
    setNewBook({title: '', author:''})
};
    return (
<div className="bookshelfDiv">
  <div className="formDiv">
    <h3>Add a Book</h3>
    <form onSubmit={handleSubmit} >
        <input 
        type="text" 
        name="title" 
        value={newBook.title} 
        onChange={handleInputChange} 
        placeholder="Title"
        />
        <br/>
        <input 
        type="text" 
        name="author" 
        value={newBook.author} 
        onChange={handleInputChange} 
        placeholder="Author"
        />
        <br/>
        <button type="submit">Submit</button>
    </form>
  </div>
  <div className="bookCardsDiv">
    {books.map((book, index) => (
    <div key={index} className="bookCard">
        <p>Title: {book.title}</p>
        <p>Author: {book.author}</p>
    </div>
  ))}
  </div>
</div>
);
};
export default Bookshelf;