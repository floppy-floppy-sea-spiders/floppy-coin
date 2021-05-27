/**
 * ************************************
 *
 * @module  marketsReducer
 * @author
 * @date
 * @description reducer for market data
 *
 * ************************************
 */

// import * as types from './actions/actions.js';

const initialState = {
  id: '',
  country: '',
  username: '',
  hotel: '',
  currencyType: '',
  //  conversion_Currency : '',
  exchangeRate: [],
  itineraries: [],
};

const floppyReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_USER': {
      let newUsername = state.username;
      let newId = state.id;
      const newItineraries = [];
      const newCurrency = action.payload[0].user_currency;

      const allItineraries = action.payload;

      newUsername = action.payload[0].name;
      newId = action.payload[0].account_id;

      for (let i = 0; i < allItineraries.length; i++) {
        newItineraries.push(allItineraries[i]);
      }

      return {
        ...state,
        id: newId,
        username: newUsername,
        currencyType: newCurrency,
        itineraries: newItineraries,
      };
    }
    case 'UPDATE_CURRENCY': {
      const newExchangeRate = action.payload.conversion_rates;
      return {
        ...state,
        exchangeRate: newExchangeRate,
      };
    }
    default:
      return state;
  }
};
export default floppyReducers;
