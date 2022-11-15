/* Import */

import styled from "styled-components";
import Banner from "../../components/Banner";
import Card from "../../components/Card/index"
import { Link } from "react-router-dom";
import data from "../../utils/data/data.json"
import colors from "../../utils/colors/color";

/* Styles */ 

const CardContainer = styled.div`
    display: flex;
    margin: 30px auto;
    flex-wrap: wrap;
    justify-content: center;
    gap: 25px;
    width: 98%;
    @media (min-width: 768px){
        margin-top: 60px;
    }
        @media (min-width: 1260px){
            width: 91%;
            padding-top: 2%;
            padding-bottom: 2%;
            gap: 2em;
            background-color: ${colors.backgroundLight};
            border-radius: 25px 25px 0px 25px;
            }
            @media (min-width: 1400px){
                padding-top: 80px;
                padding-bottom: 80px;
                gap: 80px;
                }   
`
function Home (){
    return (
        <main>
        <Banner title="Chez vous, partout et ailleurs" cover="https://zupimages.net/up/22/45/c3hp.jpg" />
        <CardContainer>
        {data.map((rental, id) =>(
            <div key={id}>
                <Link to={`/rentals/${rental.id}`}>
                    <Card cover={rental.cover} title={rental.title} />
                </Link>
            </div>

        ))}
        </CardContainer>
        </main>
    )
}

export default Home;