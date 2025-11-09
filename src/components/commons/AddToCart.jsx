import { Button } from "neetoui";
import useCartItemsStore from "stores/useCartItemsStore";
import { shallow } from "zustand/shallow";

const AddToCart = ({ slug }) => {
  // const [isCart, SetIsCart] = useState(false);
  // const [cartItems, setCartItems] = useContext(CartItemsContext);
  const { isInCart, toggleIsInCart } = useCartItemsStore(
    store => ({
      isInCart: store.cartItems.includes(slug),
      toggleIsInCart: store.toggleIsInCart,
    }),
    shallow
  );

  const handleClick = e => {
    e.stopPropagation();
    e.preventDefault();
    // setCartItems(prevCartItems =>
    //   prevCartItems.includes(slug)
    //     ? without([slug], cartItems)
    //     : [slug, ...cartItems]
    // );
    toggleIsInCart(slug);
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
