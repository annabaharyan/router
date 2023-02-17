import { useRoutes } from "react-router-dom";
import AddBook from "./components/AddBook";
import BookDetails from "./components/BookDetails";
import BookList from "./components/BookList";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
export const MyRoutes = () => {
  const routing = useRoutes([
    {
      element: <Home />,
      path: "",
    },
    {
      element: <NavBar />,
      path: "books",
      children: [
        { element: <BookList />, path: "" },
        { element: <AddBook />, path: "add" },
        { element: <BookDetails />, path: "item/:id" },
      ],
    },
    { element: <h1>Error 404:Page not found</h1>, path: "*" },
  ]);
  return routing;
};
