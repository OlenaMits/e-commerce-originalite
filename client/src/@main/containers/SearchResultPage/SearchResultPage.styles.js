import { styled } from "@mui/material";
import {Box} from "@mui/material";

export const StyledGrid = styled(Box)`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	align-items: center;
	justify-items: center;
	row-gap: 4rem;
	column-gap: 3rem;
	margin-top: 16px;
	margin-bottom: 16px;
`;

export const StyledSearchBox= styled(Box)`
	display: flex;
	align-items: center;
	justify-content: center;
	row-gap: 4rem;
	margin-top: 16px;
	margin-bottom: 16px;
	height: 350px;
`;