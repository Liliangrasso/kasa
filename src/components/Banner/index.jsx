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
        margin: 40px;
    }

`
const BannerWrapper = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    width: 90%;
`
const BannerTitle = styled.h1`
    position: absolute;
    align-self: center;
    margin: 25px;
    overflow: hidden;
    color: ${colors.secondary};
    @media (min-width: 992px){
        font-size: 42px;
    }
`
const Cover = styled.img`
    background-size: cover;
    background-position: center;
    width: 100%;
    border-radius: 25px    
`

function Banner ({title, cover}){

    return (
        <BannerContainer>
            <BannerWrapper>
                <Cover src={cover} alt="Fond" />
                <BannerTitle>{title}</BannerTitle>
            </BannerWrapper>
        </BannerContainer>
    )
}

export default Banner;