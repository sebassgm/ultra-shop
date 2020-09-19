import React from 'react'
import Producto from './Producto'
import {getBusqueda, getSearch} from '../services/productos'
import Buscador from './Buscador'

class ProductoContainer extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            productos:[],
            cargando: true,
        }
    }

    async componentDidMount (){
       const responseJson = await getBusqueda()
       this.setState({productos: responseJson.results, cargando: false})
    }

  handleSearch = async (search) => {
      const responseJson = await getSearch(search)
      this.setState({productos: responseJson.results})
  }
        
        
    
    render () {
        const {cargando, productos} = this.state
        

        return (
            <React.Fragment>
                <Buscador handleSearch = {this.handleSearch} />
                {
                    cargando && 'cargando..'
                }

                {
                    (!cargando && !productos.length) && 'Sin resultados'
                }       
                <section className = "productos-container">
                    {
                        productos.map((producto) => <Producto
                        name = {producto.title} 
                        key= {producto.id} 
                        imagenLink = {producto.thumbnail} 
                        precio = {producto.price} 
                    />)
                    }
                </section>
            </React.Fragment>
            
        )
    }
}

export default ProductoContainer