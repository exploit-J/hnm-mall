import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducer/productReducer";

// let store = createStore(
//   productReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );

// redux toolkit 버전
// composeWithDevTools, applyMiddleware, thunk 다 생략 가능하다
const store = configureStore({
  reducer: { product: productReducer },
});

export default store;
