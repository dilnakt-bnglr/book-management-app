import "./style.css";

function Book({ bookData }) {
  console.log(bookData);
  return (
    <div className="book-card">
      <img
        src={bookData.coverImage}
        // width="100px"
        // height="100px"
        className="book-img"
      />
      <div className="book-data">
        <h2 className="book-title">{bookData.title}</h2>
        <p className="book-author">{bookData.author}</p>
        <p className="book-desc">{bookData.description}</p>
      </div>
    </div>
  );
}
export default Book;
