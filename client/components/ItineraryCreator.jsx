import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
const ItineraryCreator = (props) => {
    return (
        <div>
            <form method="POST" action='/homepage/itinerary'>
                <label>
                    Where would you like to go?
                    <input name="countryName" type="text" placeholder="addCountry" />
                    <input name="countryCode" type="text" placeholder="USD?" />
                </label>
                <br></br>
                <label>
                    What you flying?
                    <input name="flightName" type="text" placeholder="flight information" />
                    <input name="flightPrice" type="number" placeholder="flight cost" />
                </label>
                <br></br>
                <label>
                    Where you staying?
                    <input name="hotelName" type="text" placeholder="hotel name" />
                    <input name="hotelPrice" type="number" placeholder="hotel cost" />
                </label>
                <br></br>
                {/* {inputArrays} */}
                {/* <br></br>
                <label>
                    Add Activity
                    <input name="activity" type="text" placeholder ="activity"/>
                    <input name="activityCost" type="number" placeholder="amount" />
                </label> */}
                {/* <button onClick={setCount(count + 1)}>Add Activity</button>
                <button onClick={setCount(count - 1)}>Delete Activity</button> */}
                {/* <br></br> */}
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}
export default ItineraryCreator;



/*
// renders a form to the screen to gather user input and send to /homepage/itinerary

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

const ItineraryCreator = (props) => {

    function handleSubmit(e) {
        // grab state 
        // e.preventDefault();
        let country = document.getElementById('country');
        let countryCode = document.getElementById('countryCode');
        let flight = document.getElementById('flight');
        let flightCost = document.getElementById('flightCost');
        let hotel = document.getElementById('hotel');
        let hotelPrice = document.getElementById('hotelPrice');

        fetch('/homepage/itinerary', {
            method: 'POST',
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                country_name: country.value,
                currency_code: countryCode.value,
                flight_name: flight.value,
                flight_price: flightCost.value,
                hotel_name: hotel.value,
                hotel_price: hotelPrice.value
            })
        }).then(response => console.log(response.body));
    }
    // currency_code, f.name AS flight_name, f.price AS flight_price, h.name AS hotel_name, h.price AS hotel_price, u.name AS name, u.currency AS user_currency
    // const [count, setCount] = useState(1);

    // const inputArrays = [];

    // useEffect(() => {

    //     for (let i = 0; count < 5; i++) {
    //         inputArrays.push(
    //             <label>
    //         Add Activity
    //         <input name={`activity${i}`} type="text" placeholder ="activity"/>
    //         <input name={`activityCost${i}`} type="number" placeholder="amount" />
    //     </label>)
    //     )
    // }
    // },[])

    // fetch('https://v6.exchangerate-api.com/v6/210336b0a4a601367acee4c6/latest/USD')
    // .then((res) => res.json())
    //.then((data.conversion_rates) => {
        //if (useState(state => state.octo.currency))
    //})
    //  // grab user native currency 
    // let userCurrency = state.octo.currency;
    // // grab their vacation country currency


//     const handleSubmit = (event) => {
//         //event.preventDefault();
//         const inputs = event.target.getElementsByTagName("input");
//         fetch('/homepage/itinerary', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({
//                 countryName: inputs[0].value,
//                 countryCode: inputs[1].value,
//                 flightName: inputs[2].value,
//                 flightPrice: inputs[3].value,
//                 hotelName: inputs[4].value,
//                 hotelPrice: inputs[5].value
//         })
//     })
//     .then(res => console.log(res))
//     .catch(err => {
//         console.log(err)
//     })
// }      

// opporutniy to add ReactRouters
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <label>
                    Where would you like to go?
                    <input name="countryName" type="text" placeholder="addCountry" id="country" />
                    <input name="countryCode" type="text" placeholder="USD?" id="countryCode" />
                </label>
                <br></br>
                <label>
                    What you flying?
                    <input name="flightName" type="text" placeholder="flight information" id="flight" />
                    <input name="flightPrice" type="number" placeholder="flight cost" id="flightCost" />
                </label>
                <br></br>
                <label>
                    Where you staying?
                    <input name="hotelName" type="text" placeholder="hotel name" id="hotel" />
                    <input name="hotelPrice" type="number" placeholder="hotel cost" id="hotelPrice" />
                </label>
                <br></br>
                {/* {inputArrays} */
                {/* <br></br>
                <label>
                    Add Activity
                    <input name="activity" type="text" placeholder ="activity"/>
                    <input name="activityCost" type="number" placeholder="amount" />
                </label> */}
                {/* <button onClick={setCount(count + 1)}>Add Activity</button>
                <button onClick={setCount(count - 1)}>Delete Activity</button> */}
                {/* <br></br> */}
//                 <input type="submit" value="Submit" />
//             </form>
//         </div>

//     )
// }

// export default ItineraryCreator;