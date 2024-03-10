// Import express to create website
const express = require('express');
const site = express();

// Register view engine
site.set('view engine', 'ejs');

// Set up Auth0
const { auth } = require('express-openid-connect');

const config = {
    authRequired: false,
    auth0Logout: true,
    secret: 'D7B4802DED581BAEF028136DD339C83E',
    baseURL: 'http://localhost:8000',
    clientID: 'ixK178Cu3mzOLtp2Ozx0551CvllAJ7y9',
    issuerBaseURL: 'https://dev-3uin1r4kzokst8qp.us.auth0.com'
};
  
// Auth router attaches /login, /logout, and /callback routes to the baseURL
site.use(auth(config));
  

// Import mongoose to connect with MongoDB
const mongoose = require('mongoose');

// Connect to MongoDB with mongoose
const db = 'mongodb+srv://testing:testing123@test.khegfej.mongodb.net/';
mongoose.connect(db)
    .then((result) => site.listen(8000))
    .catch((err) => console.log(err));

// Set files in public folder available to frontend
site.use(express.static('public'));

// Import controllers
const controller = require('./controllers/siteController');
site.get('/', controller.index);
site.get('/about', controller.about);
site.get('/create', controller.create);

// 404 Redirect
site.use((req, res) => {
    res.status(404).render('404', { title: '404 Page' });
});
