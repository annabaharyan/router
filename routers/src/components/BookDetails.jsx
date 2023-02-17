import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { myUrl } from "../constants";
import BookItem from "./BookItem";

export default function BookDetails() {
  const params = useParams();
const navigate=useNavigate()
  const [mybook, setmybook] = useState(null);
  const [otherbooks, setotherbooks] = useState([]);
  useEffect(() => {
    axios.get(`${myUrl}/${params.id}`).then((resp) => {
      if("error"in resp.data){
        navigate("/books")
      }
      setmybook(resp.data.book);
      setotherbooks(resp.data.others);
    });
  }, [params.id]);
  return (
    <div>
      {mybook ? (
        <div className="details">
          <div className="book">
            <h2>{mybook.title} Details</h2>
            <img src={mybook.photo} alt="book" />
            <div>
              <h4>{mybook.title}</h4>

              <p>Price {mybook.price}AMD</p>
              <p>{mybook.description}</p>
            </div>
          </div>
          <div className="author">
            <img src={mybook.authorPhoto} alt="author" />
            <h3>{mybook.author}</h3>
            <p>{mybook.aboutAuthor}</p>
            <div>
              {otherbooks.length > 0 &&
                otherbooks.map((elem, ind) => (
                  <BookItem key={ind} book={elem} />
                ))}
            </div>
          </div>
        </div>
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
}
