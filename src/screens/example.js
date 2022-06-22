import {
    Box,
    Text,
  } from '@chakra-ui/react';
  import {Nav} from '../components/bottom-nav'

export const ExampleFetch = () => {
    return (
        <Box minH="100vh">
            <Box textAlign="center" fontSize="xl">
                <Text pt={10} bg="white">
                    HACK to the future!
                </Text>
             </Box>
            <Nav />
        </Box>
    )
}