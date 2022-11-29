/* Import */

import styled from "styled-components";
import colors from "../../utils/colors/color";

/* Styles */

const OwnerWrapper = styled.div`
    display: flex;
    align-items: center;
`
const OwnerName = styled.span`
    color: ${colors.primary}
`
const OwnerPicture = styled.img`
    border-radius: 50%;
    height: 64px;
    margin-left: 1%;
    @media (min-width: 992px){
        height: 88px;
    }
`
function Owner(props) {
    return(
        <OwnerWrapper>
            <OwnerName>{props.ownerName}</OwnerName>
            <OwnerPicture src={props.ownerPicture}/>
        </OwnerWrapper>
    )
}

export default Owner;