import React from 'react';
import { Link } from 'react-router-dom';
import { StyledDiv, StyledText, StyledWrapper } from './NewCollection.styles'

function NewCollection() {
	return (
		<Link to="/store/man">
			<img src="img/mainPage/photo-1483118714900-540cf339fd46.svg" />
			<StyledWrapper>
				<StyledText>new collection</StyledText>
				<StyledDiv>
					<span>SH</span>OP NOW
				</StyledDiv>
			</StyledWrapper>
		</Link>
	)
}

export default NewCollection;
