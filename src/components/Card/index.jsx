/* Import */

import styled from "styled-components";
import PropTypes from 'prop-types';

/* Styles */

const CardItem = styled.div`
    height: 340px;
    width: 340px;
    background: white;
    border-radius: 10px;
`
const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    transition: 200ms;
    position: relative;
    &:hover {
        cursor: pointer;
        box-shadow: 3px 3px 20px #e2e3e9;
    }
`
const CardCover = styled.img`
    height: 100%;
    max-width: 100%;
    border-radius: 10px;
    object-fit: cover;
`
const CardTitle = styled.p`
    position: absolute;
    top: 255px;
    margin-left: 20px;
    text-align: left;
    max-width: 60%;
    color: white;
    font-size: 18px;
`

function Card({cover, title}){

    return(
        <CardItem>
            <CardWrapper>
                <CardCover src={cover}/>
                <CardTitle>{title}</CardTitle>
            </CardWrapper>
        </CardItem>
    )
}

/* Sécurisation des Props */

Card.propTypes = {
    title: PropTypes.string.isRequired,
    cover: PropTypes.string,
}
Card.defaultProps = {
        title: 'Mon titre par défaut',
    }

export default Card;