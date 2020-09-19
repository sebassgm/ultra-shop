const linkBase = 'https://api.mercadolibre.com'

export async function getBusqueda(){
    
    const response = await fetch(`${linkBase}/sites/MCO/search?q=novedades`)
    const responseJson = await response.json()

    return responseJson
}

export async function getSearch(q){
    const response = await fetch(`${linkBase}/sites/MCO/search?q=${q}`)
    const responseJson = await response.json()

    return responseJson
}
export async function getProducto(q){
    const response = await fetch(`${linkBase}/items/${q}?include_attributes=all`)
    const responseJson = await response.json()

    return responseJson
}

export default {
    getBusqueda,
    getSearch,
    getProducto
}
