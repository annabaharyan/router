import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="home-nav">
        <nav>
          <Link to="/books">All books</Link>
          <Link to="/books/add">Add new book</Link>
        </nav>
        <h3 className="main-heading">Best books</h3>
      </div>
      <img
        src={require("../images/library.webp")}
        alt="library"
        className="home-image"
      />
    </>
  );
}
