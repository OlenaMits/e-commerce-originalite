import { createAsyncThunk } from '@reduxjs/toolkit';

import { getProductsList as fetchProductList, getProductsSearchList as fetchProductSearchList } from '../../../services/api/productsApi';

export const getProductList = createAsyncThunk(
	'productList/getProductList',
	async ({ startPage, perPage, minPrice, maxPrice, colors, categories, male }) => {

		const { data } = await fetchProductList({
			startPage,
			perPage,
			minPrice,
			maxPrice,
			colors,
			categories,
			male
		});

	return data;
});

export const getProductSearchList = createAsyncThunk(
	'productList/getProductSearchList',
	async (value) => {

		const { data } = await fetchProductSearchList(value);

	return data;
});
