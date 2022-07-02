import React from 'react';
import {
  Box,
  Text,
  Center,
} from '@chakra-ui/react';
import {Nav} from '../components/bottom-nav'
import { Logo } from '../components/logo';
import { Search } from '../components/search';

export const Home = () => {
    return (
        <>
        <Box minH="100vh">
            <Box textAlign="center" fontSize="xl">
                <Box spacing={8}>
                    <Center p={20}><Search /></Center>
                </Box>
             </Box>
            <Nav />
        </Box>
        </>
    );
}
