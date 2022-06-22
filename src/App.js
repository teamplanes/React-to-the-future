import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {Home} from './screens/home'

import {ExampleFetch} from './screens/example'

function App() {
  return (
    <ChakraProvider theme={theme}>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />}>
              <Route path="/api" element={<ExampleFetch />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
