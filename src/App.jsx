import BookList from "./components/BookList";
import { books } from "./utils/mockData";
import "./components/style.css";
import { useState } from "react";

function App() {
  const [searchText, setSearchText] = useState("");
  const [booksList, setBooksList] = useState(books);

  function handleSearch() {
    const filteredBooks = books.filter((book) =>
      book.title.toLowerCase().includes(searchText.toLowerCase()),
    );
    setBooksList(filteredBooks);
  }
  return (
    <>
      <div className="search">
        <h2>Search Books</h2>
        <div>
          <input
            type="text"
            className="search-input"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
      <BookList bookDetails={booksList} />
    </>
  );
}
export default App;
