/**
 * ************************************
 *
 * @module Server
 * @author Scratch: Team Photogenicus (Phillip, Sean, Peter, Alex and Brian), Iteration: Team Floppy (Sully, Robleh, Ken, Angela, Lorenzo)
 * @date 5/25/2021
 * @description 
 *
 * ************************************
 */

/******************** Importing modules ************************/
// Importing path and express node modules
const path = require('path');             // https://nodejs.org/api/path.html
const express = require('express');       // https://www.npmjs.com/package/express

// Declaring app, assigning app to instance of express to run express methods upon
const app = express();
// Declaring port variable for listen use case 
const PORT = 3000;

//Importing object w/ methods exported from databaseControllers file, giving it label of cookieController  
const databaseController = require('./controllers/databaseControllers');

//Requiring in dependency cookie-parser to parse cookies in file      
const cookieParser = require('cookie-parser'); // https://www.npmjs.com/package/cookie-parser

//Importing object w/ methods exported from cookieController file, giving it label of cookieController  
const cookieController = require('./controllers/cookieController');

/******************** Express Middleware ************************/

// app.use without a path specified applies the middleware to all requests

// Parses incoming requests with urlencoded payloads http://expressjs.com/en/api.html#express.urlencoded
app.use(express.urlencoded({ extended: true })); 

// Built-in express middleware that serves static files from the specified directory
// The function determines which files to serve by combining the provided root directory with req.url (essentially, the part after "http://localhost:port")
app.use(express.static(path.resolve(__dirname, '../build')));

//built-in middleware function in Express: parses incoming requests with JSON payloads; places in req.body 
app.use(express.json());

//Parse Cookie header and populate req.cookies with an object keyed by the cookie names.
app.use(cookieParser());

// Express JavaScript Templates (EJs)
// Used for rendering Express JavaScript templates, EJs must be rendered.
app.set('view engine', 'ejs'); // http://expressjs.com/en/api.html#app.set

/******************** Server Route Handlers ************************/

// Handle requests to '/' and render login screen back to client
app.get('/', (req, res) => {
  return res.render(path.resolve(__dirname, '../client/login'));
}); 

// TO DO: Create two routers, homepageRouter and signupRouter to handle any requests to /homepage and /signup to their respective routers.

// Handle requests to '/homepage/itinerary' and render index? to page; specify endpoint; appending to add ejs 
app.post('/homepage/itinerary', databaseController.addItinerary, (req, res) => {
  console.log('INSIDE HOMEPAGE/ITINERARY');
  console.log(path.resolve(__dirname, '../index.ejs'));
  return res.status(200).render(path.resolve(__dirname, '../index.ejs'));
});

app.get('/homepage/getItinerary', databaseController.getItinerary, (req, res) => {
  return res.status(200).json(res.locals.itinerary);
});

//when user (get) requests signup page, then render signup page
app.get('/signup', (req, res) => {
  res.render('./../client/signup', {error: null});
});

app.post('/signup', 
  databaseController.bcrypt, 
  databaseController.addAccount, 
  databaseController.getAccountID, 
  cookieController.setCookie, 
  (req, res) => {
  // when user successfully signs up, need to save account, then redirect them to home page
  return res.status(200).render('../index');
});


// app.get('/homepage', (req, res) => {
  //   return res.render('../index')
  // })
  
  //test
  // app.get('/db/getName', (req, res) => {
    //   console.log('req', req);
    //   res.json('Peter');
    // })
    
    
    //user posts request on signup page, create user and return 'home' page
    
    
    //THIS WAS FOR TESTING, user creates itinerary here
    
    app.post('/login', 
      databaseController.verifyAccount, 
      databaseController.getAccountID, 
      cookieController.setCookie, 
      (req, res) => {
      // user attempts to login, verify info is accurate, then redirect to user's home page
      // return res.locals.passwords
      return res.render('../index');
    });
// app.get('/index', (req, res) => {
//   return res.status(200).render('../index')
// })


app.use('/db/getactivities', databaseController.getActivities, (req, res) => {
  return res.status(200).json(res.locals.activities);
});

//Handles post request to add new activity to itinerary
//Note to populate itinerary_activity table and return all activities associated with the current itinerary id
app.post('/addactivity', databaseController.addActivity, databaseController.createItineraryActivity, (req, res) => {
  // when user successfully adds an activity, currently just returns status 200 and index.html
  return res.status(200).send('Brian, please fix this return statement');
});

//global error handler
app.use((err, req, res, next) => {
  return res.status(500).send('This is our global error handler message. Yay!');
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
})