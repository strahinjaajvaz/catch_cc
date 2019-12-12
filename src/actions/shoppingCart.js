export const ADD_ITEM_TO_SHOPPING_CART = "ADD_ITEM_TO_SHOPPING_CART";
export const REMOVE_ITEM_FROM_SHOPPING_CART = "REMOVE_ITEM_FROM_SHOPPING_CART";
export const INCREMENT_ITEM_IN_CART = "INCREMENT_ITEM_IN_CART";
export const DECREMENT_ITEM_IN_CART = "DECREMENT_ITEM_IN_CART";

export const addItemToShoppingCart = item => ({
  type: ADD_ITEM_TO_SHOPPING_CART,
  payload: item
});

export const removeItemFromShoppingCart = itemId => ({
  type: REMOVE_ITEM_FROM_SHOPPING_CART,
  payload: itemId
});

export const incrementItemInCart = itemId => ({
  type: INCREMENT_ITEM_IN_CART,
  payload: itemId
});

export const decrementItemInCart = itemId => ({
  type: DECREMENT_ITEM_IN_CART,
  payload: itemId
});
