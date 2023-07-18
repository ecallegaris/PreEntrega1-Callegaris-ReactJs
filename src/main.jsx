import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  // 2. Wrap ChakraProvider at the root of your app
  // El provider va a dotar de todas sus componentes a
  // toda su aplicación
  <ChakraProvider>
    <App />
  </ChakraProvider>
)
