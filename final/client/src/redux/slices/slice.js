import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allProducts: [],
    countProducts: 0,
    totalCost: 0,
    discount: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProductToCart: (state, action) => {
            const findProduct = state.allProducts.find((obj) => obj._id === action.payload._id);
            if (findProduct) {
                findProduct.count += action.payload.count;
            } else {
                state.allProducts.push({
                    ...action.payload,
                    count: 1,
                });
            }
            // totalPriceAndTotalCount(state);
        },
    }
})

export const { addProductToCart } = cartSlice.actions;

export default cartSlice.reducer;