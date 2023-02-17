import React from "react";
import { Link } from "react-router-dom";

export default function BookItem({ book }) {
  return (
    <div>
      <img src={book.photo} alt="book" />
      <h4>{book.title}</h4>
      <p>By {book.author}</p>
      <p>Price {book.price}AMD</p>
      <Link to={"/books/item/" + book.id}>See Details</Link>
    </div>
  );
}
