import { useParams } from "react-router-dom";
import { books } from "../utils/mockData";

function BookDetails() {
  const params = useParams();
  const book = books.filter((book) => book.id == params.id);
  return (
    <>
      <h1>{`Book Details ${params.id}`}</h1>
      {book.map((book) => {
        return (
          <>
            <h2>{book.title}</h2>
            <h2>{book.author}</h2>
            <img src={book.coverImage} />
            <h2>{book.description}</h2>
            <h2>{book.category}</h2>
          </>
        );
      })}
    </>
  );
}
export default BookDetails;
