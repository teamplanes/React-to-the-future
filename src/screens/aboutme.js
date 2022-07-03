import React from 'react';
import {
Box,
Image,
Heading,
Text,
Flex,
Spacer,
VStack, Stack, HStack, StackDivider,
Container,
Center
} from '@chakra-ui/react';
// import { Keyimage} from '../components/image-container';
import {Nav} from '../components/bottom-nav'

export const AboutMe = () => {
  const MainImage = {
    backgroundColor: "#white",
    alignItems: "center",
    textAlign: "center;",
    height:'600px',
    marginTop: '-40px',
    width: '100%',
    backgroundImage: "url('https://blueandgreentomorrow.com/wp-content/uploads/2019/09/envrionmentalism-and-minimalism-1000x600.jpg')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    objectFit: "cover",
    fontSize:'40px',
   };

   const SecondImage ={
    opacity:'0.9',
    backgroundColor: "#white",
    alignItems: "center",
    textAlign: "center;",
    height:'650px',
    width: '100%',
    marginTop:'-80px',
    backgroundImage: "url('https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2017%2F05%2Fno-wifi-coffee-shops-ft-blog0517.jpg&q=60')",
    backgroundSize: 'cover',
    objectFit: "cover",
    backgroundRepeat: 'no-repeat',
    fontSize:'40px',
   };

   const Card ={
    opacity:'0.7',
    // display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "80px",
  };

  const Container={
    padding:'56px',
    marginTop:'36px'
  };

  return (
      <>
      <Box textAlign={'center'} style={{ backgroundColor: "lightgreen", padding:"24px"}}>
        <Heading mb={4} style={{fontSize:"48px", color:"white"}}> Our Greenmove's Mission ♻️</Heading>
      </Box>
      <Spacer />
        <div style={ MainImage }>
          <div style={ Container }>
            <div style={ Card }>
              <h1 style={{color:"black",fontSize:"40px", textAlign:"center", marginTop:"40px", fontFamily: "Myriad Pro Regular", }}>Helping people to find the green and air pollution free place to live as well as the most environmental friendly ways to commute by using our unique scoring methods 🖥 </h1>
            </div>
          </div>
        </div>

        <div style={ SecondImage }>
          <div style={ Card }>
            <div stye={ Container }>
              <br>
              </br>
              <h1 style={{color:"black",fontSize:"40px", textAlign:"center", marginTop:"40px" }}>How does it work?</h1>
            </div>
            <div stye={ Container }>
              <p style={{color:"black",fontSize:"40px", textAlign:"center", marginTop:"40px" }}>🔅 Enter your location</p>
            </div>
            <div stye={ Container }>
              <p style={{color:"black",fontSize:"40px", textAlign:"center", marginTop:"40px" }}>🔅 Get the green's living recommendations</p>
            </div>
            <div stye={ Container }>
              <p style={{color:"black",fontSize:"40px", textAlign:"center", marginTop:"40px" }}>🔅 Search for the rental</p>
            </div>
          </div>
        </div>
        <Spacer />
        <br></br>
      <Nav />
      </>
  );
}
