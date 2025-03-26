import { useRef, useLayoutEffect, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { Container } from '@mui/material';

import Search from './components/Search';
import ShoppingBag from './components/ShoppingBag';
import ManMenu from './components/ManMenu';
import WomanMenu from './components/WomenMenu';
import Accessory from './components/Accessory';
import DropdownRegister from './components/DropdownRegister';

import {
	LinkItem,
	Logo,
	ContainerWrapper,
	ContentWrapper,
	ButtonItem,
	BoxTechnical,
	ButtonGroup,
	ItemButton,
} from './StyledHeader';

import { isAuthSelector } from '../../@main/store/selectors/authSelector';
import { isRegistrationSelector } from '../../@main/store/selectors/registrationSelector';

const headerItems = {
	men: "MEN", 
	woman: "WOMAN",
	accessory: "ACCESSORY", 
	search: "SEARCH", 
	registration: "REG"
}

function Header() {
	const isAuth = useSelector(isAuthSelector);
	const isRegistration = useSelector(isRegistrationSelector);
	const navigate = useNavigate();

	const rootEl = useRef(null);

	const [isShoppingBag, setIsShoppingBag] = useState(false);
	const [registrationBox, setRegistrationBox] = useState(false);

	const [current, setCurrent] = useState(null); 


	useLayoutEffect(() => {
		const handleClick = (e) => {
			if (!rootEl.current.contains(e.target)) {
				setCurrent(null)
			}
		}

		document.addEventListener('click', handleClick);
		return () => document.removeEventListener('click', handleClick);
	}, []);

	useEffect(() => {
		if (isAuth) {
			setRegistrationBox(!registrationBox);
		}

		if (isRegistration) {
			navigate('/');
		}

		window.scrollTo(0, 0);
	}, [isAuth, isRegistration]);

	const handleClose = () => {
		setCurrent(null);
	}

	const buttonAuthorization =
		isAuth || isRegistration ? (
			<ButtonGroup>
				<PermIdentityOutlinedIcon sx={{ mr: 0.8 }} fontSize="medium" />
				<LinkItem to="/account/profile">My account</LinkItem>
			</ButtonGroup>
		) : (
			<ButtonGroup
				data-menu="menuRegistration"
				aria-expanded={registrationBox !== 0}
				aria-controls="example-panel"
				onClick={(e) => {
					setCurrent(headerItems.registration);
				}}
			>
				<PermIdentityOutlinedIcon sx={{ mr: 0.4 }} fontSize="medium" />
				<ItemButton>Sign Up / Log In</ItemButton>
			</ButtonGroup>
		);

	return (
		<ContainerWrapper ref={rootEl}>
			<Container maxWidth="lg">
				<ContentWrapper>
					<Link to="#">
						<ButtonItem
							data-menu="menuMen"
							aria-expanded={current === headerItems.men}
							aria-controls="example-panel"
							onClick={(e) => {
								setCurrent(headerItems.men);
							}}
						>
							MAN
						</ButtonItem>
					</Link>
					<Link to="#">
						<ButtonItem
							data-menu="menuWomen"
							aria-expanded={current === headerItems.woman}
							aria-controls="example-panel"
							onClick={(e) => {
								setCurrent(headerItems.woman);
							}}
						>
							WOMAN
						</ButtonItem>
					</Link>
					<Link to="#">
						<ButtonItem
							data-menu="menuAccessory"
							aria-expanded={current === headerItems.accessory}
							aria-controls="example-panel"
							onClick={(e) => {
								setCurrent(headerItems.accessory);
							}}
						>
							ACCESSORY
						</ButtonItem>
					</Link>

					<Logo 
						to="/"
						onClick={handleClose}
					>
						Originalité
					</Logo>

					<BoxTechnical>
						<ButtonGroup
							data-menu="menuSearch"
							aria-expanded={current === headerItems.search}
							aria-controls="example-panel"
							onClick={(e) => {
								setCurrent(headerItems.search);
							}}
						>
							<SearchOutlinedIcon sx={{ mr: 0.4 }} fontSize="medium" />
							<ItemButton>Search</ItemButton>
						</ButtonGroup>

						{buttonAuthorization}

						<ButtonGroup onClick={() => setIsShoppingBag(!isShoppingBag)}>
							<ShoppingBagOutlinedIcon sx={{ mr: 0.4 }} fontSize="medium" />
							<ItemButton>Shopping Bag</ItemButton>
						</ButtonGroup>
					</BoxTechnical>
					<DropdownRegister
						active={current === headerItems.registration ? 'auto' : 0}
						closeFormPages={handleClose}
					/>
				</ContentWrapper>

				<ManMenu
					active={current === headerItems.men ? 'auto' : 0}
					closeCategories={handleClose}
				/>
				<WomanMenu
					active={current === headerItems.woman ? 'auto' : 0}
					closeCategories={handleClose}
				/>
				<Accessory
					active={current === headerItems.accessory ? 'auto' : 0}
					closeCategories={handleClose}
				/>
				<Search active={current === headerItems.search ? 240 : 0} />
				<ShoppingBag isShoppingBag={isShoppingBag} closeShoppingBag={() => setIsShoppingBag(!isShoppingBag)} />
			</Container>
		</ContainerWrapper>
	);
}

export default Header;
