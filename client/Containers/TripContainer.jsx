import React, { useState, useEffect } from 'react';
//import { createSelector } from 'reselect';
import { useDispatch, useSelector } from "react-redux"; 
import CountryComponent from '../components/CountryComponent.jsx';
import FlightComponent from '../components/FlightComponent.jsx';
import HotelComponent from '../components/HotelComponent.jsx';
import ActivityComponent from '../components/ActivityComponent.jsx';
import Trip from '../components/Trip.jsx';
import Styles from '/public/styles.css';


function TripContainer() {
  // const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  const curCurrency = useSelector(state => state.octo.currencyType)
  fetch(`https://v6.exchangerate-api.com/v6/210336b0a4a601367acee4c6/latest/USD`)
    .then(res => res.json())
    .then(data => {
      dispatch({ type: 'UPDATE_CURRENCY', payload: data })
    })
    .catch(err => console.log(err));
    //get user native currency

  const itinerary = useSelector(state => state.octo.itineraries)
  //console.log(itinerary);
  const trips = [];

  for (let i = 0; i < itinerary.length; i++) {
    trips.push( <Trip{...itinerary[i]} key={itinerary[i]._id} /> )
  }

  return (
    // opporutniy to clean up
    <div className={Styles.tripContainer}>
      {trips}
      {/* <CountryComponent />
      <FlightComponent />
      <HotelComponent />
      <ActivityComponent /> */}
    </div >
  );
};

export default TripContainer;