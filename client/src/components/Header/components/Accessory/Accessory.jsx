import { StyledLink, Categories } from './StyledAccessory';
import { Container } from '@mui/material';
import { AnimateMenu, ContentWrap } from '../../StyledHeader';
import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectSubCategories } from '../../../../@main/store/selectors/categoriesSelector';
import { selectFilterCategories } from '../../../../@main/store/selectors/filterSelector';
import { getCategories } from '../../../../@main/store/actions/categoriesActions';
import { setFilters } from '../../../../@main/store/slices/filterSlice';

function Accessory({ active, closeCategories }) {
	const dispatch = useDispatch();

	const subCategories = useSelector((state) => selectSubCategories(state, 'accessories'));
	const filterCategories = useSelector(selectFilterCategories);

	useEffect(() => {
		dispatch(getCategories());
	}, []);

	const handleSetFilter = useCallback(
		(value) => {
			dispatch(
				setFilters({
					categories: filterCategories === value ? null : value,
				}),
			);
			closeCategories();
		},
		[filterCategories],
	);

	const handleClearFilter = useCallback(() => {
		dispatch(setFilters({ categories: null }));

		closeCategories();
	}, [filterCategories]);

	return (
		<AnimateMenu id="example-panel" duration={700} height={active}>
			<Container maxWidth="lg">
				<ContentWrap>
					<Categories>Accessories</Categories>
					<StyledLink to="/store/accessories" onClick={() => handleClearFilter()}>
						View all
					</StyledLink>
					{subCategories &&
						subCategories.map(({ name, _id }) => (
							<StyledLink key={_id} to="/store/accessories" onClick={() => handleSetFilter(name)}>
								{name}
							</StyledLink>
						))}
				</ContentWrap>
			</Container>
		</AnimateMenu>
	);
}

export default Accessory;
