import React from 'react'
import PropTypes from 'prop-types'

const Producto = ({name, imagenLink, precio}) => (
    <div className = "un-producto">
        <h2>{name}</h2>
        <h3>{precio}</h3>
        <img src={imagenLink} alt={name}/>    
    </div>
)

Producto.propTypes = {
    name: PropTypes.string.isRequired,
    precio: PropTypes.number.isRequired,
    imagenLink: PropTypes.string.isRequired,
    
}

export default Producto