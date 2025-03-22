import { styled } from '@mui/material/styles';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import AnimateHeight from 'react-animate-height';

export const ContainerWrapper = styled(Box)`
	position: relative;
	background: #000000;
`;

export const ContentWrapper = styled(Box)`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: space-around;
`;

export const LinkItem = styled(Link)`
	text-decoration: none;
	font-family: 'Josefin Sans';
	font-weight: 400;
	font-size: 16px;
	line-height: 1;
	color: #e2dfdf;
	cursor: pointer;

	/* &:hover {
		border-bottom: 1px solid #c4c4c4;
	} */
`;

export const Logo = styled(Link)`
	text-decoration: none;
	font-family: 'Sofia';
	font-weight: 400;
	font-size: 56px;
	line-height: 88px;
	color: #ffffff;
	display: inline-block;

	${(props) => props.theme.breakpoints.down('md')} {
		font-size: 36px;
		font-weight: 300;
	}

	${(props) => props.theme.breakpoints.down('sm')} {
		font-size: 20px;
		font-weight: 200;
	}
`;

export const BoxTechnical = styled(Box)`
	display: flex;
`;

export const ButtonGroup = styled(Box)`
	display: flex;
	align-items: center;
	color: #c4c4c4;
	cursor: pointer;

	button,
	svg {
		pointer-events: none;
	}

	&:not(:last-child) {
		margin-right: 14px;
	}
`;

export const ButtonItem = styled(Button)`
	text-decoration: none;
	font-family: 'Josefin Sans';
	background-color: transparent;
	outline: none;
	box-shadow: none;
	border: none;
	font-weight: 400;
	font-size: 18px;
	line-height: 1;
	color: #ffffff;
	cursor: pointer;
	margin-bottom: -3px;

	&:not(:last-child) {
		margin-right: 16px;
	}

	&:hover {
		border-bottom: 1px solid #c4c4c4;
	}
`;

export const ItemButton = styled(Button)`
	background-color: transparent;
	outline: none;
	box-shadow: none;
	text-decoration: none;
	border: none;
	font-family: 'Josefin Sans';
	font-weight: 400;
	font-size: 16px;
	line-height: 20px;
	color: #e2dfdf;

	&:hover {
		border-bottom: 1px solid #c4c4c4;
	}
`;

export const AnimateMenu = styled(AnimateHeight)`
	position: absolute;
	left: 0;
	right: 0;
	width: 100%;
	z-index: 3;
	background-color: #000;
`;

export const ContentWrap = styled(Box)`
	padding: 30px 42px 10px;
	width: 160px;
`;
