import React from 'react';
import {
Box,
Image,
Heading,
Text,
Flex,
Spacer,
VStack, Stack, HStack, StackDivider,
Container
} from '@chakra-ui/react';
// import { Keyimage} from '../components/image-container';
import {Nav} from '../components/bottom-nav'

export const AboutMe = () => {
  return (
      <>
      <Box textAlign={'center'}>
        <Heading mb={4}>Greenmove's Mission</Heading>
      </Box>
      <Spacer />
      <div className='Login-component'></div>
      <Flex>
        <Image  src='https://blueandgreentomorrow.com/wp-content/uploads/2019/09/envrionmentalism-and-minimalism-1000x600.jpg' width='150' height='400' roun/>
        <Spacer />
        <Box border='2px' bg='#0000001A' textAlign={'center'}>
          <Text fontSize='6xl' fontWeight="bold">
            Helping people to find the green and air pollution free place to live as well as the most environmental friendly ways to commute
          </Text>
        </Box>
      </Flex>
        <Box textAlign={'center'} bg='#0000001A'>
          <h1>How does it work?</h1>

            <Text>Enter your location</Text>
            <Text>Get the green's living recommendation</Text>
            <Text>Make the rental</Text>
        </Box>
      <Nav />
      </>
  );
}
