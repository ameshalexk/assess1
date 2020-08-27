const express = require("express");
const app = express();
const mongoose = require("mongoose");
const methodOverride = require('method-override');
require('dotenv').config();


const MONGOURI = "mongodb+srv://amesh:water123@aws.mteau.mongodb.net/logs?retryWrites=true&w=majority";
mongoose.connect(MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

const db = mongoose.connection;
// Connection Error/Success
// Define callback functions for various events
db.on("error", (err) => console.log(err.message + " is Mongod not running?"));
db.on("connected", () => console.log("mongo connected: "));
db.on("disconnected", () => console.log("mongo disconnected"));
db.on("open", () => {
  console.log("Connection made!");
});

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended:false}));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(methodOverride('_method'));


const logController = require('./controllers/logs.js');
const crewController = require('./controllers/crews.js');

app.use('/logs', logController);
app.use('/crews', crewController);


app.listen(3000, () => {
    console.log('App listening on port 3000!');
}); 


