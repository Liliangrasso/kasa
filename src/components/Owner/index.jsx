
function Owner(props) {
    return(
        <div className="ownerWrapper">
            <span className="ownerName">{props.ownerName}</span>
            <img className="ownerPicture" src={props.ownerPicture} alt="Owner"/>
        </div>
    )
}

export default Owner;