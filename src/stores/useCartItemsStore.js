import { without } from "ramda";
import { create } from "zustand";

const useCartItemsStore = create(set => ({
  cartItems: [],
  toggleIsInCart: slug =>
    set(({ cartItems }) => ({
      cartItems: cartItems.includes(slug)
        ? without([slug], cartItems)
        : [slug, ...cartItems],
    })),
}));

export default useCartItemsStore;
