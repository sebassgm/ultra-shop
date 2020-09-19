import React from 'react'
import PropTypes from "prop-types";

class Buscador extends React.Component {
    constructor(props){
        super(props)
        this.state = {search: ''}
    }
    handleChange = (e) => {
        this.setState({search: e.target.value})
    }
    render () {
        const {handleSearch} = this.props
        const {search} = this.state

        return (
            <div className = "buscador-container">
                <input
                value = {this.state.search}
                onChange = {this.handleChange} 
                className = "buscador-entrada" 
                type = "text"
                />
                <button className = "buscador-boton" onClick = {() => handleSearch(search)}> Buscar</button>
            </div>
        )
    }
}

Buscador.propTypes = {
    handleSearch: PropTypes.func.isRequired
}
export default Buscador