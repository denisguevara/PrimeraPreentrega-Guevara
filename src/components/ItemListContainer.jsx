import React from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'

const ItemListContainer = ({greeting}) => {
  return (
    <div>
        {greeting}
        <button>+</button>
        <button>-</button>
        <Button colorScheme='teal' variant='solid'> Agregar al carrito </Button>
    </div>
  )
}

export default ItemListContainer