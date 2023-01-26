/* Import */

import { Link } from "react-router-dom";
import data from "../../utils/data/data.json"
import bannerImg from "./banner.svg";

/* Composants */

import Banner from "../../components/Banner";
import Card from "../../components/Card/index"

function Home (){
    return (
        <main>
            <Banner title="Chez vous, partout et ailleurs" cover={bannerImg} />
            <div className="cardsContainer">
            {data.map((rental, id) =>(
                <div key={id}>
                    <Link to={`/rentals/${rental.id}`}>
                        <Card cover={rental.cover} title={rental.title} />
                    </Link>
                </div>

            ))}
            </div>
        </main>
    )
}

export default Home;