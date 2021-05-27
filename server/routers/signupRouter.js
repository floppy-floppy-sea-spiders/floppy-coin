/**
 * ************************************
 *
 * @module Server
 * @author Scratch: Team Photogenicus (Phillip, Sean, Peter, Alex and Brian), Iteration: Team Floppy (Sully, Robleh, Ken, Angela, Lorenzo)
 * @date 5/25/2021
 * @description Signup Router to handle any requests to '/signup'
 *
 * ************************************
 */
/******************** Importing modules ************************/
// Importing path and express node modules
const path = require('path');             // https://nodejs.org/api/path.html
const express = require('express');       // https://www.npmjs.com/package/express
const databaseController = require(path.resolve(__dirname, '../controllers/databaseControllers'));
const cookieController = require(path.resolve(__dirname, '../controllers/cookieController'));

// creating a new instance of an express Router, assigning the label of router
const router = express.Router(); 


router.get('/', (req, res) => {
   return res.render(path.resolve(__dirname, '../../client/signup'), { error: null }); 
});

router.post('/', 
  databaseController.bcrypt, 
  databaseController.addAccount, 
  databaseController.getAccountID, 
  cookieController.setCookie, 
  (req, res) => {
  // when user successfully signs up, need to save account, then redirect them to home page
  return res.status(200).render(path.resolve(__dirname, '../../index.ejs'));
});

module.exports = router;