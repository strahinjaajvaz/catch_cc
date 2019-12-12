import { createStore } from "redux";
import { shoppingCartReducer } from "../reducers/shoppingCartReducer";

export const initStore = () =>
  createStore(
    shoppingCartReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
