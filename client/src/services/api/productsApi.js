import axiosInstance from "./axios";

export function getProductsList(params) {
	return axiosInstance.get('/products/filter', {
		params,
	});
};

export function getProductById(itemNo) {
	return axiosInstance.get(`/products/${itemNo}`);
};

export function getProductsBySearchQuery(search) {
	return axiosInstance.get(`/products/search`, { params: {search}});
}
