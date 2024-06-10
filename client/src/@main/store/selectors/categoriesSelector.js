import { createSelector } from '@reduxjs/toolkit';

export const selectCategories = (state) => state.categories.data;
// export const selectSubCategories = createSelector(state, parentCategory) => {
// 	const data = selectCategories(state);
// 	return data.filter(({ parentId }) => parentId === parentCategory);
// };

export const selectSubCategories = createSelector(
	[
		(state) => state.categories.data,
		(_, parentCategory) => parentCategory
	],
	(data, parentCategory) => {
		return data.filter(({ parentId }) => parentId === parentCategory);
	}
)
