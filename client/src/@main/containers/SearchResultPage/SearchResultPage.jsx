import { Container } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectProductList } from '../../store/selectors/productListSelectors';
import ProductCard from '../ProductList/components/ProductCard';
import { StyledGrid, StyledSearchBox } from './SearchResultPage.styles';
import React, { useEffect } from 'react';
import { getProductSearchList } from '../../store/actions/productListActions';
import EmptyProductPage from '../ProductList/components/EmptyProductPage/EmptyProductPage';

function SearchResultPage() {
	const dispatch = useDispatch();
	const products =  useSelector(selectProductList);
	const { searchId } = useParams();
	const isNotData = products.length === 0;

	useEffect(() => {
		dispatch(getProductSearchList(searchId));
	}, [searchId])

	return (
		<Container maxWidth='lg'>
			<StyledGrid>
				{products && products.map(({ name, currentPrice, imageUrls, _id, itemNo }) => (
					<ProductCard
						key={_id}
						title={name}
						price={currentPrice}
						url={imageUrls[0]}
						alt={name}
						id={itemNo} />
				))}
				{isNotData && (
					<StyledSearchBox>
						<EmptyProductPage />
					</StyledSearchBox>
				)}
			</StyledGrid>
		</Container>
	)
}

export default SearchResultPage;
