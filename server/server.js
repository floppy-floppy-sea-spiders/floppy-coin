/**
 * ************************************
 *
 * @module Server
 * @author Scratch: Team Photogenicus (Phillip, Sean, Peter, Alex and Brian), Iteration: Team Floppy (Sully, Robleh, Ken, Angela, Lorenzo)
 * @date 5/25/2021
 * @description Main server file
 *
 * ************************************
 */
/** ****************** Importing modules *********************** */
// Importing path and express node modules
const path = require('path'); // https://nodejs.org/api/path.html
const express = require('express'); // https://www.npmjs.com/package/express

// Requiring in dependency cookie-parser to parse cookies in file
const cookieParser = require('cookie-parser'); // https://www.npmjs.com/package/cookie-parser

// Declaring app, assigning app to instance of express to run express methods upon
const app = express();
// Declaring port variable for listen use case
const PORT = 3000;

// Import routers
const homepageRouter = require(path.resolve(__dirname, './routers/homepageRouter.js'));
const signupRouter = require(path.resolve(__dirname, './routers/signupRouter.js'));

// Importing object w/ methods exported from databaseControllers file, giving it label of cookieController
const databaseController = require(path.resolve(__dirname, './controllers/databaseControllers'));

// Importing object w/ methods exported from cookieController file, giving it label of cookieController
const cookieController = require(path.resolve(__dirname, './controllers/cookieController'));

/** ****************** Express Middleware *********************** */

// app.use without a path specified applies the middleware to all requests

// Parses incoming requests with urlencoded payloads http://expressjs.com/en/api.html#express.urlencoded
app.use(express.urlencoded({ extended: true }));

// Only serve minified and uglified code if environment is production
if (process.env.NODE_ENV === 'production') {
  app.use('/build', express.static(path.resolve(__dirname, '../build')));
}

// Serve static files in the public folder (styles.css)
app.use(express.static(path.resolve(__dirname, '../public'))); // potentially unecessary

// built-in middleware function in Express: parses incoming requests with JSON payloads; places in req.body
app.use(express.json());

// Parse Cookie header and populate req.cookies with an object keyed by the cookie names.
app.use(cookieParser());

// Express JavaScript Templates (EJs)
// Used for rendering Express JavaScript templates, EJs must be rendered.
app.set('view engine', 'ejs'); // http://expressjs.com/en/api.html#app.set

/** ****************** Server Route Handlers *********************** */

// Handle requests to '/' and render login screen back to client
app.get('/', (req, res) => res.render(path.resolve(__dirname, '../client/login')));

// Send to homepage router for http requests to the /homepage/ path
app.use('/homepage', homepageRouter);

// Send to signup router for http requests to the /signup/ path
app.use('/signup', signupRouter);

// Handle requests to '/login', verify the username/password, if successful, get the account id and store it in response.cookies, then render the index page to client
app.post(
  '/login',
  databaseController.verifyAccount,
  databaseController.getAccountID,
  cookieController.setCookie,
  (req, res) =>
    // user attempts to login, verify info is accurate, then redirect to user's home page
    // return res.locals.passwords
    res.render('../index')
);

// Handle requests to '/db/getactivities', pull activities for specific user and send back to client
app.use('/db/getactivities', databaseController.getActivities, (
  req,
  res // Why db/getactivities and not just getactivities?
) => res.status(200).json(res.locals.activities));

// Handles post request to add new activity to itinerary
// Note to populate itinerary_activity table and return all activities associated with the current itinerary id
app.post(
  '/addactivity',
  databaseController.addActivity,
  databaseController.createItineraryActivity,
  (req, res) =>
    // when user successfully adds an activity, currently just returns status 200 and index.html
    res.status(200).send('Brian, please fix this return statement')
);

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = { ...defaultErr, ...err };
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// Port listening, console logs to VS Code terminal when port 3000 is on
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
