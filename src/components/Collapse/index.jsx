/* Import */

import PropTypes from 'prop-types'
import { useState } from "react";
import { FaChevronDown } from 'react-icons/fa';
import { FaChevronUp } from 'react-icons/fa';

function Collapse({title, description} ){

    // Stockage de l'état
    const [active, setActive] = useState(false)

    // Changement de l'état au click
    const toggle = i => {
        console.log(i)
        setActive(!active)
    }
    return (
        <div className="collapseContainer">
                <div className="collapseItem">
                    <div className="collapseTitleContainer" onClick={toggle}>
                        <p className="collapseTitle">{title}</p>
                        <span className="collapseSign">{active ? <FaChevronUp /> : <FaChevronDown/> }</span>                           
                    </div>
                    <div className="collapseDescriptionContainer">
                        <div className={active ? 'descriptionOpen' : 'descriptionClose'} >{description}</div>
                    </div> 
                </div> 
        </div>
    )
}

/* Sécurisation des Props */

Collapse.propTypes = {
    title: PropTypes.string.isRequired,
}
Collapse.defaultProps = {
        title: 'Mon titre par défaut',
    }

export default Collapse;