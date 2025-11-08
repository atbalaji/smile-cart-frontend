import { Button } from "neetoui";

const AddToCart = ({ isInCart, toggleIsInCart }) => {
  // const [isCart, SetIsCart] = useState(false);

  const handleClick = e => {
    e.stopPropagation();
    e.preventDefault();
    toggleIsInCart();
    // SetIsCart(prevValue => !prevValue);
  };

  return (
    <Button
      label={isInCart ? "Remove from Cart" : "Add to Cart"}
      size="large"
      onClick={handleClick}
    />
  );
};

export default AddToCart;
