import useSelectedQuantity from "components/hooks/useSelectedQuantity";
import { Button } from "neetoui";
import { isNil } from "ramda";

import ProductQuantity from "./ProductQuantity";

const AddToCart = ({ slug, availableQuantity }) => {
  // const [isCart, SetIsCart] = useState(false);
  // const [cartItems, setCartItems] = useContext(CartItemsContext);
  // const { isInCart, toggleIsInCart } = useCartItemsStore(
  //   store => ({
  //     isInCart: store.cartItems.includes(slug),
  //     toggleIsInCart: store.toggleIsInCart,
  //   }),
  //   shallow
  // );

  const { selectedQuantity, setSelectedQuantity } = useSelectedQuantity(slug);

  const handleClick = e => {
    e.stopPropagation();
    e.preventDefault();
    // setCartItems(prevCartItems =>
    //   prevCartItems.includes(slug)
    //     ? without([slug], cartItems)
    //     : [slug, ...cartItems]
    // );
    setSelectedQuantity(1);
    // SetIsCart(prevValue => !prevValue);
  };

  if (isNil(selectedQuantity)) {
    return <Button label="Add to cart" size="large" onClick={handleClick} />;
  }

  return <ProductQuantity {...{ slug, availableQuantity }} />;
};

export default AddToCart;
