import React from 'react'
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';

import {Nav} from './components/top-nav'
import {Home} from './screens/home'


function App() {
  return (
    <ChakraProvider theme={theme}>
        <Nav />
        <Home />
    </ChakraProvider>
  );
}

export default App;
