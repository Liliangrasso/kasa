/* Import */

import star from '../../img/star.svg'
import fullStar from '../../img/fullStar.svg'
import styled from "styled-components";

/* Styles */

const RankImg = styled.img`
    height: 20px;
    @media (min-width: 992px){
        height: 25px;
    }
`
function Ranking ({score}){
    const ranks = [1, 2, 3, 4, 5];
    return(
        <div>
            {ranks.map((rank) =>
                    score >= rank ? (
                        <RankImg 
                            key={rank.toString()}
                            src={fullStar}
                            alt="Ranking star"
                        />
                    ) : (
                        <RankImg
                            key={rank.toString()}
                            src={star}
                            alt="Ranking star"
                        />                    
                    )
                )
            }
        </div>
    )
}

export default Ranking;