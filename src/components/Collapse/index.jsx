
/* Import */

import styled from "styled-components";
import PropTypes from 'prop-types'
import { useState } from "react";
import colors from "../../utils/colors/color";
import { FaChevronDown } from 'react-icons/fa';
import { FaChevronUp } from 'react-icons/fa';


/* Styles */

const CollapseContainer = styled.div`
    width: 90%;
    margin: auto;
    @media (min-width: 992px){
        width: 70%;
    }
`
const Item = styled.div`
    background-color: #F6F6F6;
    border-radius: 10px;
    margin-bottom: 20px;
`

const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: #FF6060;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 10px;
    cursor: pointer;
`
const ItemTitle = styled.p`
    color: white;
`
const SignTitle = styled.span`
    position: absolute;
    right: 17%;
    font-size: 25px;
    color: white;
    @media (max-width: 992px){
        right: 10%;
    }
`
const ItemDescription = styled.p`
    color: ${colors.primary};
    text-align: left;
    margin-left: 15px;
`
const DescriptionContainer = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
`

function Collapse({title, description} ){

    // Stockage de l'état
    const [active, setActive] = useState(false)

    // Changement de l'état au click
    const toggle = i => {
        console.log(i)
        setActive(!active)
    }
    return (
        <CollapseContainer>
                <Item >
                    <TitleContainer  onClick={toggle}>
                        <ItemTitle>{title}</ItemTitle>
                        <SignTitle>{active ? <FaChevronDown/> : <FaChevronUp /> }</SignTitle>                           
                    </TitleContainer>
                    <DescriptionContainer>
                        <ItemDescription className={active ? 'descriptionOpen' : 'descriptionClose'}>{description}</ItemDescription>
                    </DescriptionContainer> 
                </Item> 
        </CollapseContainer>
    )
}

/* Sécurisation des Props */

Collapse.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}
Collapse.defaultProps = {
        title: 'Mon titre par défaut',
    }

export default Collapse;