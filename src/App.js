import React,{useState, useEffect} from 'react'
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import {Nav} from './components/bottom-nav'
import {Home} from './screens/home'


function App() {

  return (
    <ChakraProvider theme={theme}>
        <Home />
        <Nav />
    </ChakraProvider>
  );
}

export default App;
