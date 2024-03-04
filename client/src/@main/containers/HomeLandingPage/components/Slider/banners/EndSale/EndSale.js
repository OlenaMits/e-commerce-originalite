import React from "react";
import { Link } from "react-router-dom";
import { StyledDiv, StyledText, StyledWrapper } from './EndSale.styles'

function EndSale( ){
 return (
    <Link to="/store/man">
		<img src="img/mainPage/photo-1519027356316-9f99e11d8bac.svg" />
		<StyledWrapper>
			<StyledText>end-of-season sale</StyledText>
			<StyledDiv>
				<span>SH</span>OP NOW
			</StyledDiv>
		</StyledWrapper>
    </Link>
 )
}

export default EndSale;
