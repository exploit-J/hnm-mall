function getProducts(searchQuery) {
  return async (dispatch, getState) => {
    let url = `https://my-json-server.typicode.com/exploit-J/hnm-mall/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    // setProductList(data);
    // console.log(data);
    dispatch({ type: "GET_PRODUCT_SUCCESS", payload: { data } });
  };
}

export const productAction = { getProducts };
