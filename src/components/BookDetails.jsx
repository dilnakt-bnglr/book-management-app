import { useParams } from "react-router-dom";
import { books } from "../utils/mockData";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { removeItem } from "../utils/cartSlice";

function BookDetails() {
  const params = useParams();
  const book = books.filter((book) => book.id == params.id);

  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addItem(item));
  };

  const handleRemove = () => {
    dispatch(removeItem());
  };

  return (
    <>
      <h1>{`Book Details ${params.id}`}</h1>
      {book.map((book) => {
        return (
          <>
            <h2>{book.title}</h2>
            <h2>{book.author}</h2>
            <img src={book.coverImage} width="100px" height="100px" />
            <h2>{book.description}</h2>
            <h2>{book.category}</h2>
            <button onClick={() => handleAddToCart(book)}>Add to cart</button>
            <button onClick={handleRemove}>Remove Item</button>
          </>
        );
      })}
    </>
  );
}
export default BookDetails;
