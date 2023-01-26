/* Import */

import star from '../../img/star.svg'
import fullStar from '../../img/fullStar.svg'

function Ranking ({score}){
    const ranks = [1, 2, 3, 4, 5];
    return(
        <div>
            {ranks.map((rank) =>
                    score >= rank ? (
                        <img 
                            className='rankImg'
                            key={rank.toString()}
                            src={fullStar}
                            alt="Ranking star"
                        />
                    ) : (
                        <img
                            className='rankImg'
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