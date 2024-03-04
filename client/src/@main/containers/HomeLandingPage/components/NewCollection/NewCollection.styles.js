import styled from 'styled-components';
import {Link} from 'react-router-dom';


export const ContainerWrapper = styled.div`
	background-color: #000;
	padding-bottom: 110px;
	padding-top: 105px
`
export const NewInH1 = styled.h1`
	font-weight: 400;
	font-size: 24px;
	color: #fff;
	margin-bottom: 35px;
	margin-left: 70px
`
export const NewInLink = styled(Link)`
	display: block;
	height: 100%;
`
export const ImageText = styled.p`
	display: block;
	position: absolute;
	bottom: 0;
	left: 0;

	padding: 10px 10% 10px 10%;
	margin: 0;
	box-sizing: border-box;
	font-weight: 700;
	font-size: 24px;
	line-height: 1.2;
	text-transform: uppercase;
	color: #FFFFFF;
	background-color:rgba(18, 18, 18, 0.7);
`
export const GridContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(2, 1fr);
	grid-column-gap: 24px;
	grid-row-gap: 24px;
`
export const GridItem = styled.div`
	position: relative;
	grid-column: ${(props) => `span ${props.column}`};
	grid-row: ${(props) => `span ${props.row}`};

	img {
		height: 100%;
        width: 100%;
		object-fit: cover;
	}
`
