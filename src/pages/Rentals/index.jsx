import Slider from "../../components/Slider/index"
import { useParams } from "react-router-dom";
import data from '../../utils/data/data.json'

function Rentals(){
    const { id } = useParams();
    const getRentals = data.find((object) => object.id === id)
    const slidePictures = getRentals.pictures;
    const tags = getRentals.tags;

    return (
        <main className="rentalsContainer"  key={ id }>
            <aside className="sliderContainer">
                <Slider className="slider" slides={slidePictures} />  
            </aside>
            <section>
                <div className="titleTagContainer">
                    <h1>{getRentals.title}</h1>
                    <h2>{getRentals.location}</h2>
                </div>
            </section>
        </main>
    )
}

export default Rentals;