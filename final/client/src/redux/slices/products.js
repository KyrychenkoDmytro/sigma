import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit';
import axios from '../../axios';

// =====================  get all products ========================
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const { data } = await axios.get('/products');
    return data;
})

// ==================== limiting the number of items in the category and offer sections =========================
const selectItems = state => state.products.items;

export const selectDisplayedItemsInCategories = createSelector(
    selectItems,
    (items) => items.slice(0, 8)   // limit 8
);

export const selectDisplayedItemsInOffer = createSelector(
    selectItems,
    (items) => items.filter(item=> item.category === 'Vegetable').slice(0, 4)   // limit 4 cards from the vegetable category
);

const initialState = {
    items: [],
    status: 'loading',
}

const productsSclice = createSlice({
    name: 'products',
    initialState,
    reducers: {
    },
    extraReducers: {
        [fetchProducts.pending]: (state) => {
            state.items = [];
            state.status = 'loading';
        },
        [fetchProducts.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.status = 'loaded';
        },
        [fetchProducts.rejected]: (state) => {
            state.items = [];
            state.status = 'error';
        }
    }
})

export const { getMeEightProducts } = productsSclice.actions;

export default productsSclice.reducer;