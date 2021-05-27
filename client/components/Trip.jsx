import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

const Trip = (props) => {

// fetch('https://v6.exchangerate-api.com/v6/210336b0a4a601367acee4c6/latest/USD')
//     .then(res => res.json())
//     .then(data => console.log(data))
//     //get user native currency
    const curCurrency = useSelector(state => state.octo.currencyType);
    const curRates = useSelector(state => state.octo.exchangeRate);

    const hotelexchangeRate = parseInt(props.hotel_price) / curRates[props.currency_code]
    const flightexchangeRate = parseInt(props.flight_price) / curRates[props.currency_code]
    console.log(curRates[props.currency_code])

    return (
        <div className="trips">
            <strong>{props.country_name} Trip</strong> 
            <br></br>
            <br></br> 
            <p>{props.hotel_name} {props.currency_code}{props.hotel_price}  {curCurrency}{hotelexchangeRate}   </p>
            <p>{props.flight_name} {props.currency_code}{props.flight_price}  {curCurrency}{flightexchangeRate} </p>
        </div>
    )
}

export default Trip;
