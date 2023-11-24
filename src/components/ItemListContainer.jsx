import React from 'react'
import ItemList from './ItemList'
import { Center } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'


const ItemListContainer = () => {
  const {category} = useParams()
  const productos = [
    {id: 1, nombre:"PRODUCTO A",descripcion:"Descripcion de producto A",stock:3, category:"cat 1"},
    {id: 2, nombre:"PRODUCTO B",descripcion:"Descripcion de producto B",stock:6, category:"cat2"},
    {id: 3, nombre:"PRODUCTO C",descripcion:"Descripcion de producto C",stock:2, category:"cat3"},
    {id: 4, nombre:"PRODUCTO D",descripcion:"Descripcion de producto D",stock:10, category:"cat4"},
    {id: 5, nombre:"PRODUCTO E",descripcion:"Descripcion de producto E",stock:24, category:"cat1"},
    {id: 6, nombre:"PRODUCTO F",descripcion:"Descripcion de producto F",stock:15, category:"cat2"},
    {id: 7, nombre:"PRODUCTO G",descripcion:"Descripcion de producto G",stock:40, category:"cat3"},
    {id: 8, nombre:"PRODUCTO H",descripcion:"Descripcion de producto H",stock:33, category:"cat4"},
    {id: 9, nombre:"PRODUCTO I",descripcion:"Descripcion de producto I",stock:21, category:"cat3"},
  ]

  const getProductos = new Promise((resolve, reject) => {
    if(productos.length > 0){
      setTimeout(() => {
        resolve(productos)
      },2000)
      } else {
        rejeat(new Error("no hay datos"))
      }
    })

    getProductos
      .then((res) => {
      })
      .catch((error) => {
        console.log(error)
      })

    const filteredProducts = productos.filter((producto) => producto.category === category)
  
  return (
    <Center>
      <ItemList
        productos = {filteredProducts}
      />
    </Center>
  )
}

export default ItemListContainer