import axios from "axios";
import React, { useState } from "react";
import { myUrl } from "../constants";
import FormForAdd from "./FormForAdd";
import { useNavigate } from "react-router-dom";
export default function AddBook() {
  const [book, setBook] = useState({
    title: "",
    author: "",
    pages: "",
    aboutAuthor: "",
    description: "",
    price: "",
    photo: "",
    authorPhoto: "",
  });
  const [err, setErr] = useState("");
  const navigate = useNavigate();
  const handleSumbit = (e) => {
    e.preventDefault();
    for (let key in book) {
      if (!book[key]) {
        return setErr(`${key} is required`);
      }
      if (key === "price" || key === "pages") {
        if (!Number.isInteger(+book[key])) {
          return setErr(`${key} must be numeric`);
        }
      }
    }
    setErr("");
    axios.post(myUrl, book).then((resp) => {
      setBook({
        title: "",
        author: "",
        pages: "",
        aboutAuthor: "",
        description: "",
        price: "",
        photo: "",
        authorPhoto: "",
      });
      navigate("/books");
    });
  };
  return (
    <div>
      <h3 className="add-head">AddBook</h3>
      {err && <p style={{ color: "red", paddingLeft: "25px" }}>{err}</p>}
      <form onSubmit={handleSumbit} className="addForm">
        {Object.keys(book).map((elem, index) => (
          <FormForAdd
            key={index}
            title={elem}
            value={book[elem]}
            onChange={(e) => setBook({ ...book, [elem]: e.target.value })}
          />
        ))}

        <button className="my-add-btn">Save</button>
      </form>
    </div>
  );
}
