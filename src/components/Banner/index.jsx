/* Import */

import PropTypes from 'prop-types';

function Banner ({title, cover}){

    return (
        <aside className="bannerContainer">
            <div className="bannerWrapper">
                <img  className="cover" src={cover} alt="Fond" />
                <h1 className="bannerTitle">{title}</h1>
            </div>
        </aside>
    )
}

/* Sécurisation des Props */

Banner.propTypes = {
    title: PropTypes.string,
    cover: PropTypes.string.isRequired,
}

export default Banner;