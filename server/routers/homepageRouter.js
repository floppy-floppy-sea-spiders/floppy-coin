/**
 * ************************************
 *
 * @module Server
 * @author Scratch: Team Photogenicus (Phillip, Sean, Peter, Alex and Brian), Iteration: Team Floppy (Sully, Robleh, Ken, Angela, Lorenzo)
 * @date 5/25/2021
 * @description Homepage Router to handle any requests to '/homepage'
 *
 * ************************************
 */
/******************** Importing modules ************************/
// Importing path and express node modules
const path = require('path');             // https://nodejs.org/api/path.html
const express = require('express');       // https://www.npmjs.com/package/express
const databaseController = require(path.resolve(__dirname, '../controllers/databaseControllers'));


// creating a new instance of an express Router, assigning the label of router
const router = express.Router(); 


router.post('/itinerary', 
  databaseController.addItineraryCountry, 
  databaseController.addItineraryHotel, 
  databaseController.addItineraryFlight, 
  databaseController.addItinerary,
  (req, res) => {
    console.log('RES LOCALS: ', res.locals);
    return res.status(200).render(path.resolve(__dirname, '../../index.ejs'));
});

// Handle requests to 'homepage/getItinerary', invoke getItinerary method on databaseController - returned itinerary JS object will be sent back to client after being converted back to JSON, along with 200 status
router.get('/getItinerary', databaseController.getItinerary, (req, res) => {
  return res.status(200).json(res.locals.itinerary);
});

module.exports = router;
