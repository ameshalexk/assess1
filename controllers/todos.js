const express = require('express');
const router = express.Router();
const Todos = require('../models/todos.js');

//Index
router.get('/', (req, res)=>{
    Todos.find({}, (error, allTodos)=>{
        res.render('Index', {
            todos: allTodos
        });
    });
});

//New
router.get('/new', (req, res) => {
    res.render('New');    
});

// Create
router.post('/', (req, res)=>{
    Todos.create(req.body, (error, createdTodos) => {
        res.redirect("/")
    }   
    )
});


module.exports = router;