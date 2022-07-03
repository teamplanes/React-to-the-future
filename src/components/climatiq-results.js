import React from 'react';

export const ClimatiqResults = ({ data }) => {

    return  (
        <>
            <p>{data.placeName}, {data.state}, {data.countryCode}</p>
            <p>Category: {data.aqiInfo.category}</p>
            <p>AQI: {data.AQI}</p>
            <p>CO: {data.CO}</p>
            <p>NO2: {data.NO2}</p>
            <p>OZONE: {data.OZONE}</p>
            <p>PM10: {data.PM10}</p>
            <p>PM25: {data.PM25}</p>
            <p>SO2: {data.SO2}</p>
        </>
    )   
};
