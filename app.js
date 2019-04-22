const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

//  DB Config
const db = require('./config/keys').MongoURI;

//  Connect to mongo
mongoose.connect(db, {
        useNewUrlParser: true
    })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

//  EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

//  BodyParser
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json())

//  Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on http://localhost:${PORT}`));