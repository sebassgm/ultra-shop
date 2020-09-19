import React from 'react'
import PropTypes from 'prop-types'

const DescrProd = ({name, imagenLink, precio, vendedor}) => (
    <div className = "un-producto">
        <h2>{name}</h2>
        <h3>{precio}</h3>
        <img src={imagenLink} alt={name}/>    
    </div>
)

DescrProd.propTypes = {
    name: PropTypes.string.isRequired,
    precio: PropTypes.number.isRequired,
    imagenLink: PropTypes.string.isRequired,
    vendedor: PropTypes.string.isRequired
    
}

export default DescrProd