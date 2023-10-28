import React from 'react'
import { Text } from '@chakra-ui/react'

const CartWidget = () => {
  return (
    <div className="carrito">
        <button>
            <img src="../public/img/carrito.png" alt="Carrito de compras" width="30px" height="auto"/>
            <Text fontSize="x1" fontWeight="bold" color="gray">
                3
            </Text>
            
        </button>
    </div>
  )
}

export default CartWidget