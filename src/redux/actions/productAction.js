import { productActions } from "../reducer/productReducer";

function getProducts(searchQuery) {
  return async (dispatch, getState) => {
    let url = `https://my-json-server.typicode.com/exploit-J/hnm-mall/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();

    // dispatch({ type: "GET_PRODUCT_SUCCESS", payload: { data } });

    //redux toolkit버전
    dispatch(productActions.getAllProduct({ data }));
  };
}

export const productAction = { getProducts };
