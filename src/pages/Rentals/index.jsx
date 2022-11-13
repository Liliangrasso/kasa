import {useParams} from "react-router-dom"


function Rentals (){

    const id = useParams()
    console.log(id)
    return (
        <main><h1>Rentals</h1></main>
    )
}

export default Rentals;