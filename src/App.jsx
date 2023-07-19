// comando "rafce" para crear un nuevo componente

import React from 'react'
// Importo NavBar.jsx llamando el componente mediante
// <NavBar/>
import NavBar from './componenets/NavBar'
import ItemListContainer from './componenets/ItemListContainer'

const App = () => {
  return (
    <>
      <NavBar/>
      <ItemListContainer
      greeting="Bienvenidos a mi tienda"
      />
      
    </>
  )
}

export default App
