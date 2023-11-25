import React from 'react'
import CartWidget from './CartWidget'
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer, Button } from '@chakra-ui/react'
import {Link} from 'react-router-dom'
import { ChevronDownIcon } from '@chakra-ui/icons'

const NavBar = () => {
  return (
    <div>
        <Flex>
          <Box p='4'>
            <Link to={'/'}>
              <img src="../public/img/escudo-river.png" alt="escudo River Plate" width="50px" height="auto"/>
            </Link>
            
          </Box>
          <Spacer />
          <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon/>}>
                  Categorias
                </MenuButton>
                <MenuList>
                  <MenuItem>
                    <Link to={`/category/${'cat1'}`}>
                      Categoria A
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to={`/category/${'cat2'}`}>
                      Categoria B
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to={`/category/${'cat3'}`}>
                      Categoria C
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to={`/category/${'cat4'}`}>
                      Categoria D
                    </Link>
                  </MenuItem>
                </MenuList>  
            </Menu>
          <Spacer />
          <Box p='4'>
            <Link to={'/cart'}>
              <CartWidget/>
            </Link> 
          </Box>
        </Flex>
        
    </div>
  )
}

export default NavBar