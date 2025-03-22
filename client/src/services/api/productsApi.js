import axiosInstance from "./axios";

export function getProductsList(params) {
	return axiosInstance.get('/products/filter', {
		params,
	});
};

export function getProductsSearchList(value) {
	return axiosInstance.get('/products/search', {
		params: {
			search: value,
		},
	});
};

export function getProductById(itemNo) {
	return axiosInstance.get(`/products/${itemNo}`);
};
