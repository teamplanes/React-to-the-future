import React, { useState } from 'react'
import {
  Box,
  Center,
} from '@chakra-ui/react';
import {Nav} from '../components/bottom-nav'
import { Results } from '../components/results';
import { Input, InputGroup, Spinner, Button } from '@chakra-ui/react'
import axios from 'axios';

export const Home = () => {
    const [inputData, setInputData] = useState('london');
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    const handleChange = (e) => {
        setInputData(e.target.value)
    };

    const handleClick = async (e) => {
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
            const {data} = await axios.get(`https://api.ambeedata.com/latest/by-city?city=${inputData}`, options)
            
            if (data.err) {
                throw new Error(data.err)
            }
            setData(data.stations[0])
            console.log(data.stations[0])
            setLoading(false);
        } catch {
            console.warn("There's an error!!! Cannot fetch data!")
            setError('Oops, please try again!')
            setLoading(false);
        }
    }
    return (
        <>
        <Box minH="100vh">
            <Box textAlign="center" fontSize="xl">
                <Box spacing={8}>
                    <Center p={60}>
                        <InputGroup size='md'>
                            <Input
                            pr='4.5rem'
                            placeholder='Enter a City...'
                            onChange={handleChange}
                            value={inputData}
                            />
                            { loading ? <Spinner size='lg' colorScheme='teal' variant='solid'></Spinner> :
                            <Button type='submit' onClick={handleClick}>search</Button>}
                        </InputGroup>
                    </Center>
                </Box>
             </Box>
             {data ? <Results data={data}/> : ""}
            <Nav />
        </Box>
        </>
    );
}
