const express = require('express');
const path = require('path');
const session = require('express-session');
const exphbs = require('express-handlebars');
require('dotenv').config();
const Handlebars = require("handlebars");
const MomentHandler = require("handlebars.moment");
MomentHandler.registerHelpers(Handlebars);

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connections');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: process.env.Session_Secret,
    cookie: {
        maxAge: 3600000
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};


app.use(session(sess));
const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./controllers/'));



sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`now listening`))
})