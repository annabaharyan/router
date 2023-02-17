import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <ul className="home-nav navigate">
        <li><Link to="/" className="go-home">Home</Link></li>
        <li>
          <Link to="/books">All books</Link>
        </li>
        <li>
          <Link to="/books/add">Add book</Link>
        </li>
      </ul>
      <Outlet />
   
    </div>
  );
}
