import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Author from "./components/Author.jsx";
import Error from "./components/Error.jsx";
import Contact from "./components/Contact.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BookList from "./components/BookList.jsx";
import BookDetails from "./components/BookDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <BookList />,
      },
      {
        path: "/author",
        element: <Author />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/book/:id",
        element: <BookDetails />,
      },
    ],
    errorElement: <Error />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
