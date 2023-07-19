import React from "react";

/*// Importo el elemento "Button"
import { Button } from '@chakra-ui/react'
// importo el ícono "SearchIcon"
// import { SearchIcon } from '@chakra-ui/icons'*/

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

import imgCarrito from "../../images/carrito-de-compras.png";

const CartWidget = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="Link" onClick={handleShow}>
        <img src={imgCarrito} alt="add item" width="30" />
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Carrito de Compras</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body></Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default CartWidget;
