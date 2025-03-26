import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProductList } from '../../store/actions/productListActions';

import Slider from './components/Slider';
import Categories from './components/Categories';
import NewInSection from './components/NewCollection';

function HomeLandingPage() {
	const dispatch = useDispatch();

	//TODO: remove getProductList if not needed
	useEffect(() => {
		dispatch(getProductList());
		window.scrollTo(0, 0);
	}, [dispatch]);

	return (
	<>
			<Slider />
			<NewInSection />
			<Categories />
			</>
		
	);
}

export default HomeLandingPage;
