
import {
  Box,
} from '@chakra-ui/react';
import {
    Link,
  } from "react-router-dom";


export const Nav = () => {
    return  (
        <>
            <Box position="absolute" bottom={0} right={0} left={0} p={8} bg="#0000001A">
                <Box flexDirection="row" display="flex"  justifyContent="space-around" flex={1}>
                    <Link display="flex" flex={1} to="/">Home</Link>
                    <Link display="flex" flex={1} to="/api">API-demo</Link>
                </Box>
            </Box>
        </>
    )   
}