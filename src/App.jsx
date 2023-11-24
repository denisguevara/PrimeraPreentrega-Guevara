import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { Flex, Spacer } from '@chakra-ui/react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home.jsx'
import Cart from './components/Cart.jsx'
import ItemListContainer from './components/ItemListContainer'
import ProductDetail from './components/ProductDetail.jsx'

//ejecutar npm install react-router-dom
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/cart' element={<Cart/>}/>
          <Route exact path='/itemListContainer' element={<ItemListContainerS/>}/>
          <Route exact path='/producto/:id' element={<ProductDetail/>}/>
          <Route exact path='/productos/categoria' element={<ItemListContainer/>}/>
        </Routes>
        
      </BrowserRouter>
    </div>
  )
}

export default App
