import React from 'react';
import {
  Box,
  Center,
} from '@chakra-ui/react';
import {Nav} from '../components/bottom-nav'
import { Search } from '../components/search';

export const Home = () => {
    return (
        <>
        <Box minH="100vh">
            <Box textAlign="center" fontSize="xl">
                <Box spacing={8}>
                    <Center p={60}><Search /></Center>
                </Box>
             </Box>
            <Nav />
        </Box>
        </>
    );
}
