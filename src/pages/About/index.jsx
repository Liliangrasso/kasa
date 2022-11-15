
/* Import */

import Banner from "../../components/Banner";
import Collapse from "../../components/Collapse/index"
import styled from "styled-components";

/* Styles */

const AboutMain = styled.main`
    height: 100%;
`
const CollapseWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`
function About(){
    return (
        <AboutMain>
            <Banner cover="https://zupimages.net/up/22/45/hi8g.jpg" />
            <CollapseWrapper>
                {aboutData.map((item, i) => (
                    <Collapse key={item.id} title={item.title} description={item.description}/>
                ))}          
            </CollapseWrapper>
        </AboutMain>
    )
}

/* Data */

const aboutData = [
    {
        id: 1,
        title: "Fiabilité",
        description: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
    },
    {
        id: 2,
        title: "Respect",
        description: "La bienveillance fait partie des valeurs fondatrices de Kasa.Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    },
    {
        id: 3,
        title: "Service",
        description: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
    },
    {
        id: 4,
        title: "Responsabilité",
        description: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    }
]

export default About;