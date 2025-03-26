import { createSlice } from '@reduxjs/toolkit';

import { getProduct } from '../actions/productActions';
// import { addProductToCart } from '../actions/cartActions';

const initialState = {
	data: null,
	currentColor: null,
	currentSize: null,
};

export const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		setSize: (state, action) => {
			state.currentSize = action.payload;
		},
		setColor: (state, action) => {
			state.currentColor = action.payload;
		},
		clearData: (state) => {
			state.data = null;
		}
	},
	extraReducers: (builder) => {
		builder.addCase(getProduct.fulfilled, (state, action) => {
			state.data = { ...action.payload };
			state.currentColor = null;
			state.currentSize = null;
		});
	},
});

export const { setSize, setColor, clearData } = productSlice.actions;

export default productSlice.reducer;
