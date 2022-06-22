import React from 'react';
import {
  Box,
  Text,
  Center,
} from '@chakra-ui/react';
import {Nav} from '../components/bottom-nav'
import { Logo } from '../components/logo';

export const Home = () => {
    return (
        <Box minH="100vh">
            <Box textAlign="center" fontSize="xl">
                <Box spacing={8}>
                    <Center p={20}><Logo h="40vmin" pointerEvents="none" /></Center>
                    <Text pt={10} bg="white">
                        HACK to the future!
                    </Text>
                </Box>
             </Box>
            <Nav />
        </Box>
    );
}
