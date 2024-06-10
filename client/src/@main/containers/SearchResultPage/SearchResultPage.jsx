import { Container } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectProductList } from '../../store/selectors/productListSelectors';
import ProductCard from '../ProductList/components/ProductCard';
import { StyledGrid } from './SearchResultPage.styles';
import { useEffect } from 'react';
import { getProductsBySearchQuery } from '../../store/actions/productListActions';

function SearchResultPage() {
	const products =  useSelector(selectProductList);
	const dispatch = useDispatch();
	const { searchId } = useParams();

	useEffect(() => {
		if(searchId) {
			dispatch(getProductsBySearchQuery(searchId));
		}
	}, [searchId])

	return (
		<Container maxWidth='lg'>
			<StyledGrid>
			{products.map(({ name, currentPrice, imageUrls, _id, itemNo }) => (
								<ProductCard
									key={_id}
									title={name}
									price={currentPrice}
									url={imageUrls[0]}
									alt={name}
									id={itemNo} />
							))}
			</StyledGrid>
		</Container>
	)
}

export default SearchResultPage;
