/* Import */

import styled from "styled-components";
import colors from "../../utils/colors/color";
import PropTypes from 'prop-types';

/* Styles */

const BannerContainer = styled.aside`
    height: 120px;
    max-width: 91%;
    margin: 1% auto;
    @media (min-width: 768px){
        height: 220px;
    }
    @media (min-width: 912px){
        margin: 2% auto;
    }
    @media (min-width: 1400px){
        height: 300px;
        width: 90%;
    }

`
const BannerWrapper = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
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
Banner.propTypes = {
    title: PropTypes.string,
    cover: PropTypes.string.isRequired,
}

export default Banner;