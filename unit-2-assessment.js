const express = require("express");
const app = express();
const mongoose = require("mongoose");
require('dotenv').config();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


const MONGOURI= process.env.MONGOURI;

mongoose.connect(MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true , useFindAndModify: false , useCreateIndex: true
});


mongoose.connection.once('open', () => {
  console.log("connected to mongo");
  
})

const controller = require('./controllers/todos.js');

app.use('/', controller);


app.listen(PORT, () => {
    console.log('listening on: ' + PORT);
}); 


