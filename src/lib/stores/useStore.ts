import { CardList, Order, Product, WishList } from "@prisma/client";
import { create } from "zustand";
type modelDate = {
  product: Product | [];
  cardList: CardList | [];
  wishList: WishList | [];
  order: Order | [];
  setProduct: (product: Product) => void;
  setCardList: (cardList: CardList) => void;
  setOrder: (order: Order) => void;
  setWishList: (wishList: WishList) => void;
};
const useStore = create<modelDate>((set, get) => ({
  product: [],
  cardList: [],
  wishList: [],
  order: [],
  setProduct: (product: Product) => set(() => ({ product: product })),
  setCardList: (cardList: CardList) => set(() => ({ cardList: cardList })),
  setOrder: (order: Order) => set(() => ({ order: order })),
  setWishList: (wishList: WishList) => set(() => ({ wishList: wishList })),
}));
export default useStore;
