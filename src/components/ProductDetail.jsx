import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
    const {id} = useParams()
8
    productos.find((p) => p.id ===id)
  return (
    <div>ProductDetail</div>
  )
}

export default ProductDetail