import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  productList: [],
};

// function productReducer(state = initialState, action) {
//   let { type, payload } = action;
//   switch (type) {
//     case "GET_PRODUCT_SUCCESS":
//       return { ...state, productList: payload.data };
//     default:
//       return { ...state };
//   }
// }

// export default productReducer;

// redux toolkit 버전
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getAllProduct(state, action) {
      state.productList = action.payload.data;
    },
    // reducer(case) 추가할경우 함수를 추가해준다
    // 추가할경우(state, action) {
    //   state.추가state명 = action.payload.data;
    // },
  },
});

// productSlice의 reducers를 내보낸다. action에서 쓰자.
// reducer가 여러개일경우 const {a, b, c} = productSlice.actions
export const productActions = productSlice.actions;

export default productSlice.reducer;
