import produce from "immer";
import {
  ADD_ITEM_TO_SHOPPING_CART,
  REMOVE_ITEM_FROM_SHOPPING_CART,
  INCREMENT_ITEM_IN_CART,
  DECREMENT_ITEM_IN_CART
} from "../actions/shoppingCart";

const INITIAL_STATE = {
  shoppingCartItems: []
};

export function shoppingCartReducer(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case ADD_ITEM_TO_SHOPPING_CART: {
        return {
          ...draft,
          shoppingCartItems: [...draft.shoppingCartItems, action.payload]
        };
      }
      case REMOVE_ITEM_FROM_SHOPPING_CART: {
        return {
          ...draft,
          shoppingCartItems: [
            ...draft.shoppingCartItems.filter(
              item => item.id !== action.payload
            )
          ]
        };
      }
      case INCREMENT_ITEM_IN_CART: {
        const item = draft.shoppingCartItems.find(
          item => item.id === action.payload
        );
        if (item) {
          item.quantity += 1;
        }
        return draft;
      }
      case DECREMENT_ITEM_IN_CART: {
        const item = draft.shoppingCartItems.find(
          item => item.id === action.payload
        );
        if (item) {
          item.quantity -= 1;
        }
        return draft;
      }
      default: {
        return draft;
      }
    }
  });
}
