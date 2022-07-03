import React, { useState,useEffect } from 'react'
import {
    Box,
    Center,
} from '@chakra-ui/react';
import {Nav} from '../components/bottom-nav'
import { Input, InputGroup, Spinner, Button } from '@chakra-ui/react'
import axios from 'axios';
import {Results} from './results'

function Search(){
    const [inputData,setInputData ] = useState("")

    const [coordinates,setCoordinates] = useState({lat:51.5085, lng:-0.1257})

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const [data, setData] = useState();

    console.log(coordinates,"coord")

    useEffect(()=>{
        const url= `http://api.positionstack.com/v1/forward?access_key=${process.env.REACT_APP_POSITIONSTACK_API_KEY}&query=`

        async function fetchCoordinates(){
            //need to delay loading possibility of sending request if waiting for response
            const res = await fetch(url+inputData.replace(" ",""))
            const data = await res.json()
            const {longitude, latitude} = data.data[0]
            const coordinates = {lat:latitude,lng:longitude}
            setCoordinates(coordinates)
        }
        if(inputData){
            fetchCoordinates()
        }
        
    },[inputData])

    const handleChange = (e) => {
        setInputData(e.target.value)
    };

    const handleSubmit= async (e)=>{
        setLoading(true);
        e.preventDefault()
        try {
            const apiKey = process.env.REACT_APP_API_KEY;
            const options = {
                headers: {
                    "x-api-key": apiKey,
                    "Content-Type": `application/json;charset=utf-8`
                }
            };
            const {data} = await axios.get(`https://api.ambeedata.com/latest/by-lat-lng?lat=${coordinates.lat}&lng=${coordinates.lng}`, options)
            
            if (data.err) {
                throw new Error(data.err)
            }
            setData(data.stations[0])
            setLoading(false);
            setInputData('')
            // localStorage.setItem("lng", data.stations[0].lng);
            // localStorage.setItem("lat", data.stations[0].lat);

        } catch {
            console.warn("There's an error!!! Cannot fetch data!")
            setError('Oops, please try again!')
            setLoading(false);
        }
    }

    // fetchCoordinates("se165ud", setCoordinates)
    return (
        <>
            <Box minH="100vh">
                <Box textAlign="center" fontSize="xl">
                    <Box spacing={8}>
                        <Center p={60}>
                            <form 
                            onSubmit={handleSubmit}
                            >
                                <InputGroup size='md'>
                                    <Input
                                        pr='4.5rem'
                                        placeholder='Enter a location...'
                                        onChange={handleChange}
                                        value={inputData}
                                    />
                                    {loading ? <Spinner size='lg' colorScheme='teal' variant='solid'></Spinner> :
                                        <Button type='submit'>search</Button>}
                                </InputGroup>
                            </form>
                        </Center>
                    </Box>
                </Box>
                {data ? <Results data={data} /> : ""}
                <Nav />
            </Box>
        </>
    );
}

export default Search