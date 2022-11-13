/* Import */

import styled from "styled-components";
import colors from "../../utils/colors/color";
import '../../styles/Banner/styles.css'

/* Styles */

const BannerContainer = styled.aside`
    height: 120px;
    display: flex;
    justify-content: center;
    @media (min-width: 992px){
        height: 220px;
    }

`
const BannerWrapper = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    width: 90%;
    border-radius: 25px
`
const BannerTitle = styled.h1`
    align-self: center;
    color: ${colors.secondary};
    margin: 15px;
    @media (min-width: 992px){
        font-size: 42px;
    }
`

function Banner (){

    return (
        <BannerContainer>
            <BannerWrapper className="bannerWrapper">
                <BannerTitle>Chez vous, partout et ailleurs</BannerTitle>
            </BannerWrapper>
        </BannerContainer>
    )
}

export default Banner;