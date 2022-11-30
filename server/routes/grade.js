let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect with grade model

let Grade = require('../models/grade');
let gradeController = require('../controller/grade')

// read operations
//get route for the grade list

router.get('/', gradeController.displayGradeList);

// add opertaion
// get route for displaying the add-page -- create operation
router.get('/add', gradeController.displayAddPage);
// post route for processing the add page --  create operation
router.post('/add', gradeController.processAddPage);

// edit opertaion
// get route for displaying the edit operation -- update operation
router.get('/edit/:id', gradeController.displayEditPage);
// post route for processing the edit operation --  update operation
router.post('/edit/:id', gradeController.processEditPage);

// Delete operation 
// get to perform delete operation -- deletion
router.get('/delete/:id', gradeController.performDelete);


module.exports=router;