// express/sql
const express = require('express');
const sequelize = require('./config/connection');

// sessions
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// handlebars
const path = require('path');
const exphbs = require('express-handlebars');

// use environment variables created in the .env file
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// create sessions object
const sess = {
  secret: process.env.SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

// set up sessions
app.use(session(sess));

// create handlebars object
const hbs = exphbs.create({});

// set handle bars as the default template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// define middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// link routes
app.use(require('./controllers/'));

// connect to database and start the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
});
