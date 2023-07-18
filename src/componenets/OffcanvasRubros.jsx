import React from "react";

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import ListGroup from "react-bootstrap/ListGroup";

const OffcanvasRubros = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="Link" onClick={handleShow}>
        Rubros
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Rubros</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup>
            <ListGroup.Item action variant="light">Agua Caliente</ListGroup.Item>
            <ListGroup.Item action variant="light">Aire Acondicionado</ListGroup.Item>
            <ListGroup.Item action variant="light">Audio y Video</ListGroup.Item>
            <ListGroup.Item action variant="light">Calefaccion</ListGroup.Item>
            <ListGroup.Item action variant="light">Colchones y Muebles</ListGroup.Item>
            <ListGroup.Item action variant="light">Cuidado Personal</ListGroup.Item>
            <ListGroup.Item action variant="light">Electrodomesticos</ListGroup.Item>
            <ListGroup.Item action variant="light">Heladeras</ListGroup.Item>
            <ListGroup.Item action variant="light">Informática</ListGroup.Item>
            <ListGroup.Item action variant="light">jardín</ListGroup.Item>
            <ListGroup.Item action variant="light">Telefonía</ListGroup.Item>
            <ListGroup.Item action variant="light">Televisión</ListGroup.Item>
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default OffcanvasRubros;
