import React from 'react'

import PropTypes from 'prop-types'

import './Card.css'

const Card = ({lang,img,fcolor,scolor}) => {
    //console.log(PropTypes)
    /*Dos pares de llaves se usan asi: el primer par define que se ingresa js. el segundo par define que es un objeto */
    /*CSS viene con camelcase para propiedades de dos o mas palabras */
    /*borderRadius: '0px',*/
    return (
        <div className="card" style={{
            background: `linear-gradient(to left, ${fcolor}, ${scolor})`,
        }} > 
            <img src={img} alt='lang.svg' ></img>
            <h3>{lang}</h3>
        </div>
    )
}

Card.propTypes = {
    lang :  PropTypes.string,
    img:    PropTypes.string,
    fcolor: PropTypes.string,
    scolor: PropTypes.string,
};

export default Card
