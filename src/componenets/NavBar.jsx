import React from "react";

// Vamos a crear nuestro NavBar con la librería Chakra: https://chakra-ui.com/
// Para ello la instalamos desde nuestra consola con el comando:
// npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
// Importo los elementos del NavBar de chakra
import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  Box,
  Text,
  Flex,
  Spacer,
} from "@chakra-ui/react";

// Instalo el ícono desde la consola: npm i @chakra-ui/icons
// Importo el ícono
import { ChevronDownIcon } from "@chakra-ui/icons";

// Importo CartWidget con <CartWidget/>... line 49
import CartWidget from "./CartWidget";
import OffcanvasRubros from "./OffcanvasRubros";

// // Vamos a crear nuestro NavBar con la librería https://react-bootstrap.github.io/docs/getting-started/introduction

const NavBar = () => {
  return (
    <Flex>
      <Box w='70px' mb={2} mt={2}>
        <Text fontSize="lg" fontWeight="bold">
          Logo
        </Text>
      </Box>
      <Spacer />
      <Box w='70px' mb={2} mt={2}>
        <OffcanvasRubros/>
      </Box>
      <Spacer />
      <Box mb={2} mt={2}>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />} variant='ghost'>
            Rubros
          </MenuButton>
          <MenuList>
            <MenuItem>Agua Caliente</MenuItem>
            <MenuItem>Aire Acondicionado</MenuItem>
            <MenuItem>Audio y Video</MenuItem>
            <MenuItem>Calefaccion</MenuItem>
            <MenuItem>Colchones y Muebles</MenuItem>
            <MenuItem>Cuidado Personal</MenuItem>
            <MenuItem>Electrodomesticos</MenuItem>
            <MenuItem>Heladeras</MenuItem>
            <MenuItem>Informática</MenuItem>
            <MenuItem>jardín</MenuItem>
            <MenuItem>Telefonía</MenuItem>
            <MenuItem>Televisión</MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <Spacer />
      <Box w='70px' mb={2} mt={2}>
        <CartWidget />
      </Box>
    </Flex>
    
  );
};

export default NavBar;
