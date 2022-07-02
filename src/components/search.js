import React, { useState } from 'react'
import { Input, InputGroup } from '@chakra-ui/react'
import { useApiRequest } from '../requests'
import { Results } from '../components/results'

export const Search = () => {
    const [inputData, setInputData] = useState('london');

    const { data, error } = useApiRequest(
        `https://api.ambeedata.com/latest/by-city?city=${inputData}`
    );

    const handleChange = (e) => {
        setInputData(e.target.value)
    };

    return (
        <>
            <InputGroup size='md'>
                <Input
                pr='4.5rem'
                placeholder='Enter a City...'
                onChange={handleChange}
                value={inputData}
                />
            </InputGroup>

            {data && data.slice(0, 20).map((r) => (
                            <Results key={r.id} list={r} />
                        ))}

                        {error && <div id="error">{error}</div>}
        </>
    )
}
