import { createSlice } from '@reduxjs/toolkit';

import { getProductList, getProductSearchList } from '../actions/productListActions';

const initialState = {
	data: [],
	count: 0,
};

export const productListSlice = createSlice({
	name: 'productList',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getProductList.fulfilled, (state, action) => {
			const { products, productsQuantity } = action.payload;

			state.data = products;
			state.count = productsQuantity;
		})

		builder.addCase(getProductSearchList.fulfilled, (state, action) => {
			state.data = action.payload;
			state.count = action.payload?.length;
		})
	}
});

export default productListSlice.reducer;
