import { combineReducers } from "redux";
import reducerStaticItems from "../Redux/Reducers/StaticItems";
import reducerCart from "../Redux/Reducers/CartProducts";
import reducerProducts from "../Redux/Reducers/Product";
import reducerSort from "../Redux/Reducers/Filter";

export default combineReducers({
  staticitems: reducerStaticItems,
  cart: reducerCart,
  productscontainer: reducerProducts,
  filter: reducerSort,
});
