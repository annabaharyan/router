import axios from "axios";
import React, { useEffect, useState } from "react";
import { myUrl } from "../constants";
import BookItem from "./BookItem";

export default function BookList() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    axios.get(myUrl).then((resp) => setBooks(resp.data.items));
  }, []);
  return (
    <div>
      <h1>Book list</h1>
      <div className="book-list-wrapper">
      {books && books.map((book) => <BookItem key={book.id} book={book} />)}
      </div>
    </div>
  );
}
