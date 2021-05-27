import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import ItineraryCreator from '../components/ItineraryCreator.jsx'

function UserContainer(props) {
  //variable?
  //variable?
  //how do I bring in the user name?
  const dispatch = useDispatch();

  useEffect(() => {
      fetch('/homepage/getItinerary')
        .then((res) => {
          console.log(res)
          return res.json();
        })
        .then(data => {
          console.log(data);
          dispatch({ type: 'UPDATE_USER', payload: data })
        })
        .catch(err => {
          console.log(err)
        })
  }, [dispatch]);

  // useSelector is the equivalent of map state to props and firstName is rendered to the screen
  const firstName = useSelector(state => state.octo.username);

  return (
    <div>
        <div>
          <h1>{firstName}</h1>
        </div>
        <div>
          <ItineraryCreator />
        </div>  
    </div>
  );
};

export default UserContainer;