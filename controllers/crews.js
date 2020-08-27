const express = require('express');
const router = express.Router();
const Crew = require('../models/crew.js');

router.get('/', (req, res)=>{
    Crew.find({}, (error, allCrew)=>{

        res.render('crews/Index', {
            crews: allCrew
        });
    });
});

//Index
router.get('/', (req, res)=>{
    Crew.find({}, (error, allCrew)=>{

        res.render('crews/Index', {
            crews: allCrew
        });
    });
});


//New
router.get('/new', (req, res) => {
    res.render('crews/New');    
});

// Delete
router.delete('/:id', (req, res) => {
    // Delete document from collection
    Crew.findByIdAndRemove(req.params.id, (err, log) => {
        res.redirect('/crews');
    });
});


// // UPDATE
router.put('/:id', (req, res) => {
    req.body.engineeringAccess = req.body.engineeringAccess === "on" ? true : false;
    Crew.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedModel) => {
        res.redirect('/crews');
    });
});

// Create
router.post('/', (req, res)=>{
    if(req.body.engineeringAccess === 'on'){ 
        req.body.engineeringAccess = true;
    } else { 
        req.body.engineeringAccess = false;
    }

    Crew.create(req.body, (error, createdCrew) => {
        // res.send(createdLog);
        res.redirect("/crews")
    }   
    )
    
});

// Edit 
router.get('/:id/edit', (req, res) => {
    // Find our document from the collection - using mongoose model
    Crew.findById(req.params.id, (err, foundCrew) => {
        // render the edit view and pass it the found fruit
        res.render('crews/Edit', {
            crews: foundCrew
        })
    });
});


// Show
router.get('/:id', (req, res)=>{
    Crew.findById(req.params.id, (err, foundCrew)=>{
        res.render('crews/Show', {crews: foundCrew});
    });
});



module.exports = router;