import Book from "./Book";
import "./style.css";

function BookList({ bookDetails }) {
  //   console.log(props);
  return (
    <div className="book-list">
      {bookDetails.map((data) => (
        <Book bookData={data} />
      ))}
    </div>
  );
}
export default BookList;
