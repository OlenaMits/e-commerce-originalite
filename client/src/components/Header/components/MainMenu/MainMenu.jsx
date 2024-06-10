import { Categories, StyledLink } from './StyledMainMenu';
import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from '@mui/material';
import { AnimateMenu, ContentWrap } from '../../StyledHeader';
import { selectSubCategories } from '../../../../@main/store/selectors/categoriesSelector';
import { getCategories } from '../../../../@main/store/actions/categoriesActions';
import { setFilters } from '../../../../@main/store/slices/filterSlice';
import { selectFilterCategories } from '../../../../@main/store/selectors/filterSelector';

function MainMenu({ active, closeCategories }) {
	const dispatch = useDispatch();

	const subCategoriesWoman = useSelector((state) => selectSubCategories(state, 'woman'));
	console.log(subCategoriesWoman);
    const subCategoriesMan = useSelector((state) => selectSubCategories(state, 'man'));
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
					<Categories>Woman</Categories>
					<StyledLink to="/store/woman" onClick={() => handleClearFilter()}>
						View all
					</StyledLink>
					{subCategoriesWoman &&
						subCategoriesWoman.map(({ name, _id }) => (
							<StyledLink key={_id} to="/store/woman" onClick={() => handleSetFilter(name)}>
								{name}
							</StyledLink>
						))}
				</ContentWrap>
			</Container>
            {/* <Container maxWidth="lg">
				<ContentWrap>
					<Categories>Man</Categories>
					<StyledLink to="/store/man" onClick={() => handleClearFilter()}>
						View all
					</StyledLink>
					{subCategoriesMan &&
						subCategoriesMan.map(({ name, _id }) => (
							<StyledLink key={_id} to="/store/man" onClick={() => handleSetFilter(name)}>
								{name}
							</StyledLink>
						))}
				</ContentWrap>
			</Container> */}
		</AnimateMenu>
	);
}

export default MainMenu;

MainMenu.defaultProps = {
	height: 0,
};
