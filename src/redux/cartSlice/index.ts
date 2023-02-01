import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProducts } from "../../pages/home";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const localStorageCartValue = localStorage.getItem('cart');
const initialCartValue = localStorageCartValue ? JSON.parse(localStorageCartValue) : [];

type InitialState = {
  totalCartPrice: number;
  cartItems: IProducts[];
};

const initialState: InitialState = {
  totalCartPrice: 0,
  cartItems: initialCartValue,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart(state, { payload }: PayloadAction<IProducts>) {
      const checkIfIsAddedToCart = state.cartItems.find(
        (product) => product.id === payload.id
      );

      if (!checkIfIsAddedToCart) {
        state.cartItems.push(payload);
        localStorage.setItem('cart', JSON.stringify(state.cartItems))
        toast.success(`${payload.name} adicionado ao carrinho`, {
          position: "top-right",
          autoClose: 3000
        });
      }

      if (checkIfIsAddedToCart) {
        state.cartItems.map((cartItem) => cartItem.id === payload.id ? {
            ...cartItem,
            productQuantity: (cartItem.productQuantity += 1),
            }
            : cartItem
        );
        localStorage.setItem('cart', JSON.stringify(state.cartItems))
        toast.success(`${payload.name} adicionado ao carrinho`, {
          position: "top-right",
          autoClose: 3000
        });
      }
    },
    removeFromCart(state, {payload}: PayloadAction<IProducts>){
      const newCart = state.cartItems.filter(products => products.id !== payload.id)
      state.cartItems = newCart
      localStorage.setItem('cart', JSON.stringify(state.cartItems))
      toast.success(`${payload.name} removido do carrinho`, {
        position: "top-right",
        autoClose: 3000
      });
    },
    decreaseCartItem(state, {payload}: PayloadAction<IProducts>){
      state.cartItems.map(cartItem => cartItem.id === payload.id ? {
        ...cartItem,
        productQuantity: cartItem.productQuantity > 1 && (cartItem.productQuantity -= 1)
      } : {
        cartItem
      })
      localStorage.setItem('cart', JSON.stringify(state.cartItems))
    },
    increaseCartItem(state, {payload}: PayloadAction<IProducts>){
      state.cartItems.map(cartItem => cartItem.id === payload.id ? {
        ...cartItem,
        productQuantity: cartItem.productQuantity += 1
      } : {
        cartItem
      })
      localStorage.setItem('cart', JSON.stringify(state.cartItems))
    },
  },
});

export const { addProductToCart, removeFromCart, decreaseCartItem, increaseCartItem } = cartSlice.actions;

export default cartSlice.reducer;