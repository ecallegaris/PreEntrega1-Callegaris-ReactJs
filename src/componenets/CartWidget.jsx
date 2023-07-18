import React from "react";

// Importo el elemento "Button"
import { Button } from '@chakra-ui/react'
// importo el ícono "SearchIcon"
// import { SearchIcon } from '@chakra-ui/icons'

import carrito from "../../images/carrito-de-compras.png";

const CartWidget = () => {
  return (
    <div>
      <Button colorScheme='gray' bgImage={carrito} bgPosition='center' bgRepeat='no-repeat' variant='ghost'></Button>
    </div>
  );
};

export default CartWidget;
