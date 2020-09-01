import {
  TOGGLE_CART_HIDDEN,
  ADD_CART_ITEM,
  REMOVE_CART_ITEM,
  INCREASE_CART_ITEM_QUANTITY,
  DECREASE_CART_ITEM_QUANTITY,
} from "./consts";

export const toggleCartHidden = () => {
  return {
    type: TOGGLE_CART_HIDDEN,
  };
};

export const addCartItem = (item) => {
  return {
    type: ADD_CART_ITEM,
    payload: item,
  };
};

export const removeCartItem = (item) => {
  return {
    type: REMOVE_CART_ITEM,
    payload: item,
  };
};

export const increaseCartItemQuantity = (item) => {
  return {
    type: INCREASE_CART_ITEM_QUANTITY,
    payload: item,
  };
};

export const decreaseCartItemQuantity = (item) => {
  return {
    type: DECREASE_CART_ITEM_QUANTITY,
    payload: item,
  };
};
