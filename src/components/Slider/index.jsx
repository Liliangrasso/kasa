/* Import */

import styled from 'styled-components'
import { useState } from "react";

/* Icons */


import FaChevronLeft from '../../img/arrowleft.svg';
import FaChevronRight from '../../img/arrowright.svg';

// Navigation styles
const ArrowLeft = styled.div`
    position: absolute;
    top: 50%;
    left: 32px;
    transform: translate(0, -50%);
    color: white;
    font-size: 25px;
    z-index: 1;
    cursor: pointer;
`
const ArrowRight = styled.div`
    position: absolute;
    top: 50%;
    right: 32px;
    transform: translate(0, -50%);
    color: white;
    font-size: 25px;
    z-index: 1;
    cursor: pointer;
`
function Slider ({slides}){

    //Stockage de l'état
    const [currentPicture, setCurrentPicture] = useState(0);

    //Navigation
    const next = () => {
      if (currentPicture + 1 >= slides.pictures.length) {
        setCurrentPicture(0);
      } else {
        setCurrentPicture(currentPicture + 1);
      }
    };
  
    const prev = () => {
      if (currentPicture + 1 <= 1) {
        setCurrentPicture(slides.pictures.length - 1);
      } else {
        setCurrentPicture(currentPicture - 1);
      }
    };

    return(
        <div className='slidesContainer'>
            <div className="carrouselPictures">
                <img src={slides.pictures[currentPicture]} alt="slide"/>
            </div>
            {slides.pictures.length > 2 && (
                <>
                <div className="carrouselNavigation">
                    <div className="navigationLeft">
                        <img
                            src={ FaChevronLeft }
                            alt="Navigation vers la gauche"
                            onClick={prev}
                        />
                    </div>
                    <div className="navigationRight">
                        <img
                            src={ FaChevronRight }
                            alt="Navigation vers la droite"
                            onClick={next}
                        />
                    </div>
                </div>
          <div className="counter">
            {currentPicture + 1}/{slides.pictures.length}
          </div>
        </>
      )}
        </div>
    )
}


export default Slider;