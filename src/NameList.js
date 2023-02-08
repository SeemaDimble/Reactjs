import React from "react";

function NameList()
{
    const country=['India','UAE','Nepal','Australia']
    const countryName=country.map((country,index)=>
    <h2 key={index}>{country}</h2>)
    return(<div>{countryName}</div>)   
}

export default NameList