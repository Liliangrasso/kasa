/* Import */

import Slider from "../../components/Slider/index"
import { useParams } from "react-router-dom";
import data from '../../utils/data/data.json'

/* Composants */

import Ranking from '../../components/Ranking'
import Owner from "../../components/Owner";
import Collapse from "../../components/Collapse"


function Rentals(){

    // Récupération de l'id
    const { id } = useParams();
    try{
        // Vérification de l'id
        const getRentals = data.find((object) => object.id === id)
        // Récupération des slides et des tags
        const slidePictures = getRentals.pictures;
        const tags = getRentals.tags;
        // Récupération et affichage des équipements
        const equipments = getRentals.equipments.map((equipment, index) =>(
            <p key={index}>
                {equipment}
            </p>
        ));
    
        return (
            <main className="rentalsContainer"  key={ id }>
                <section className="sliderContainer">
                    <Slider className="slider" slides={slidePictures} />  
                </section>
                <section className="infoContainer">
                    <div className="titleTagContainer">
                        <div>
                            <h1>{getRentals.title}</h1>
                            <h2>{getRentals.location}</h2>
                        </div>
                        <div className="tagContainer">
                            {tags.map((tag, i) => (
                                <p className="tagText" key={i} >{tag}</p>
                            ))
                        }
                        </div>
                    </div>
                    <div className="rankingAndOwnerContainer">
                        <div>
                            <Ranking score={getRentals.rating}/>
                        </div>
                        <div>
                            <Owner 
                                ownerName={getRentals.host.name}
                                ownerPicture={getRentals.host.picture}
                            />
                        </div>
                    </div>
                </section>
                <section className="descAndEquipContainer">
                    <Collapse title="Description" description={getRentals.description}/>
                    <Collapse title="Equipements" description={equipments}/>   
                </section>
            </main>
        )
    }
    // Redirection sur la page 404 en cas d'erreur
    catch(err){
        window.location.href ="/404";
    }
 
}

export default Rentals;