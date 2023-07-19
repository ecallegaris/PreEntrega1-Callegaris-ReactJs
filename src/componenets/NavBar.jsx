import React from "react";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
// Importo CartWidget con <CartWidget/>... line 49
import CartWidget from "./CartWidget";
import OffcanvasRubros from "./OffcanvasRubros";
import imgLogo from "../../images/Logo.png";

// Vamos a crear nuestro NavBar con la librería Chakra: https://chakra-ui.com/
// Para ello la instalamos desde nuestra consola con el comando:
// npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
// Importo los elementos del NavBar de chakra
/*
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
*/

// Vamos a crear nuestro NavBar con la librería https://react-bootstrap.netlify.app/docs/components/navbar

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={imgLogo} alt=""  width="100" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <OffcanvasRubros />
            <Nav.Link href="#" disabled>
              Rubros
            </Nav.Link>
            <NavDropdown title="Rubros" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action1">Agua Caliente</NavDropdown.Item>
              <NavDropdown.Item href="#action2">Aire Acondicionado</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Audio y Video</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Calefaccion</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Cuidado Personal</NavDropdown.Item>
              <NavDropdown.Item href="#action6">Electrodomesticos</NavDropdown.Item>
              <NavDropdown.Item href="#action7">Heladeras</NavDropdown.Item>
              <NavDropdown.Item href="#action8">Informática</NavDropdown.Item>
              <NavDropdown.Item href="#action9">jardín</NavDropdown.Item>
              <NavDropdown.Item href="#action10">Telefonía</NavDropdown.Item>
              <NavDropdown.Item href="#action11">Televisión</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Descripción producto"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" className="me-5">Buscar</Button>
          </Form>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
