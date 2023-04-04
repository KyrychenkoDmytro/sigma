import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit';
import axios from '../../axios';

// =====================  get all products ========================
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const { data } = await axios.get('/products');
    return data;
})

// ==================== limiting the number of items in the category and offer sections =========================
const selectItems = state => state.products.items;
const limitItems = state => state.products.limitDisplayedItems;
const id = state => state.products.modelId;

export const selectDisplayedItemsInCategories = createSelector(
    [selectItems, limitItems],
    (items, limit) => items.slice(0, limit)   // limit 8
);

export const selectDisplayedItemsInOffer = createSelector(
    selectItems,
    (items) => items.filter(item => item.category === 'Vegetable').slice(0, 4)   // limit 4 cards from the vegetable category
);

export const getProductById = createSelector(
    [selectItems, id],
    (items, id) => items.find(item => item._id === id)
);

const initialState = {
    items: [],
    limitDisplayedItems: 8,
    status: 'loading',
    modelId: '',
    isHeaderVisible: true,
}

const productsSclice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        changeLimitDisplayedItems(state, action) {
            state.limitDisplayedItems = action.payload;
        },
        getModelId(state, action) {
            state.modelId = action.payload;
        },
        checkHeaderVisibility(state, action) {
            state.isHeaderVisible = !action.payload;
        }
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

export const { changeLimitDisplayedItems, getModelId, checkHeaderVisibility } = productsSclice.actions;

export default productsSclice.reducer;