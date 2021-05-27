const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;
const databaseController = require('./controllers/databaseControllers');
const cookieParser = require('cookie-parser');
const cookieController = require('./controllers/cookieController');

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../build')));
app.use(express.static('public')); //potentially unecessary

app.use(express.json());
app.use(cookieParser());
//use for rendering ejs templates, ejs must be rendered.
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  //change return filepath to login screen
  return res.render('../client/login');
});

app.post('/homepage/itinerary', databaseController.addItinerary, (req, res) => {
  console.log('We ARE HERE!')
  return res.status(200).render('../index');
})

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