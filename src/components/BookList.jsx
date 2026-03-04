import { useState } from "react";
import Book from "./Book";
import Search from "./Search";
import { books } from "../utils/mockData";
import "./style.css";
import { Link } from "react-router-dom";

function BookList() {
  const [booksList, setBooksList] = useState(books);

  const [searchText, setSearchText] = useState("");

  function handleSearch() {
    const filteredBooks = books.filter((book) =>
      book.title.toLowerCase().includes(searchText.toLowerCase()),
    );
    setBooksList(filteredBooks);
  }
  //   console.log(props);
  return (
    <>
      <Search setSearchText={setSearchText} handleSearch={handleSearch} />
      <div className="book-list">
        {booksList.map((data) => (
          <Link to={`/book/${data.id}`}>
            <Book bookData={data} />
          </Link>
        ))}
      </div>
    </>
  );
}
export default BookList;
