import React from 'react';

export const ClimatiqResults = ({ data }) => {

    const AQImeasures = {
        "0-50":"Good",
        "51-100":"Satisfactory",
        "101-200": "Moderate",
        "201-300":"Poor",
        "301-500":"Hazardous",
    }
    const CarbonMonoxide ={
        //https://www.euro.who.int/__data/assets/pdf_file/0020/123059/AQG2ndEd_5_5carbonmonoxide.PDF
    }

    const NO2={
        //https://www.gov.uk/government/statistics/air-quality-statistics/ntrogen-dioxide
        //The Air Quality Standards Regulations 2010 require that the annual mean concentration of NO2 must not exceed 40 µg/m3 and that there should be no more than 18 exceedances of the hourly mean limit value (concentrations above 200 µg/m3) in a single year.
    }

    const ozone={
        //https://www.irceline.be/en/documentation/faq/why-are-ozone-concentrations-higher-in-rural-areas-than-in-cities

    }

    const pm10={
        //https://www.gov.uk/government/statistics/air-quality-statistics/concentrations-of-particulate-matter-pm10-and-pm25
    }

    const SO2={
        //https://www.euro.who.int/__data/assets/pdf_file/0020/123086/AQG2ndEd_7_4Sulfurdioxide.pdf
    }

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
