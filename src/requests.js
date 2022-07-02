import { useEffect, useState } from "react";
import axios from 'axios';

export const useApiRequest = url => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        setLoading(true);
        async function fetchAirQuality() {
            try {
                const apiKey = process.env.REACT_APP_API_KEY;
                const options = {
                    headers: {
                        "x-api-key": apiKey,
                        "Content-Type": `application/json;charset=utf-8`
                    }
                };
                const { data } = await axios.get(url, options)
                if (data.err) {
                    throw new Error(data.err)
                }
                console.log(data)
                setData(data.results)
                setLoading(false);
            } catch {
                console.warn("There's an error!!! Cannot fetch data!")
                setError('Oops, please try again!')
                setLoading(false);
            }
        } fetchAirQuality();
    }, [url]);

    return { data, loading, error };
}