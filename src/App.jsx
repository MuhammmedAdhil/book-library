import React from "react";
import BookCard from "./components/BookCard";
import "./index.css";

function App() {
  const books = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self-help",
    year: 2018,
    description: "A guide to building good habits and breaking bad ones using small changes."
  },
  {
    id: 2,
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    genre: "Non-Fiction",
    year: 2011,
    description: "A guide to the two systems of thought that shape our judgments and decisions."
  },
  {
    id: 3,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    genre: "Finance",
    year: 2020,
    description: "Lessons about wealth, greed, and happiness told through stories."
  },
  {
    id: 4,
    title: "The Da Vinci Code",
    author: "Dan Brown",
    genre: "Mystery",
    year: 2003,
    description: "A fast-paced mystery that unravels a secret hidden in art and religion."
  },
  {
    id: 5,
    title: "Deep Work",
    author: "Cal Newport",
    genre: "Self-help",
    year: 2016,
    description: "A guide to mastering focus in a distracted world."
  }
];

  const totalBooks = books.length;
  const mostCommonGenre = "Self-help";

  return (
    <div className="app">

      <header className="header">
        <h1>My Book Collection</h1>
        <p className="subtitle">Books That Changed My Perspective</p>
      </header>

      <section className="books-list">
        {books.map((book) => (
          <BookCard
            key={book.id}
            title={book.title}
            author={book.author}
            genre={book.genre}
            year={book.year}
            description={book.description}
          />
        ))}
      </section>

      <section className="summary">
        <p>Total Books: {totalBooks}</p>
        <p>Most Common Genre: {mostCommonGenre}</p>
      </section>

      <footer className="footer">
        <p>Mariyam Rayhana AJ</p>
        <p>mariyam123@gmail.com</p>
        <p>© 2025 Book Lover</p>
      </footer>
    </div>
  );
}

export default App;