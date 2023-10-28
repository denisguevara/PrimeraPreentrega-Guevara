import React from 'react'
import CartWidget from './CartWidget'
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer } from '@chakra-ui/react'

const NavBar = () => {
  return (
    <div>
        <Flex>
          <Box p='4'>
            <img src="../public/img/escudo-river.png" alt="escudo River Plate" width="50px" height="auto"/>
          </Box>
          <Spacer />
          <Menu>
                <MenuButton>
                  Productos
                </MenuButton>
                <MenuList>
                  <MenuItem>Remeras</MenuItem>
                  <MenuItem>Abrigos</MenuItem>
                  <MenuItem>Shorts</MenuItem>
                  <MenuItem>Medias</MenuItem>
                </MenuList>
            </Menu>
          <Spacer />
          <Box p='4'>
            <CartWidget/>
          </Box>
        </Flex>
        
    </div>
  )
}

export default NavBar