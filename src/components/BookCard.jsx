import React from "react";

const BookCard = ({ title, author, genre, year, description }) => {
  return (
    <div className="book-card">
      <h3>{title}</h3>
      <p><b>Author:</b> {author}</p>
      <p><b>Genre:</b> {genre}</p>
      <p><b>Year:</b> {year}</p>
      <p className="desc">{description}</p>
    </div>
  );
};

export default BookCard;