import { createSlice } from '@reduxjs/toolkit';

import { getProductList, getProductsBySearchQuery } from '../actions/productListActions';

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
		});
		builder.addCase(getProductsBySearchQuery.fulfilled, (state, action) => {
			
			state.data = action.payload;
		})
	}
});

export default productListSlice.reducer;
