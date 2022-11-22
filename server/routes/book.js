let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect with book model

let Book = require('../models/book');
let bookController = require('../controller/book')

// read operations
//get route for the book list

router.get('/', bookController.displayBookList);

// add opertaion
// get route for displaying the add-page -- create operation
router.get('/add', bookController.displayAddPage);
// post route for processing the add page --  create operation
router.post('/add', bookController.processAddPage);

// edit opertaion
// get route for displaying the edit operation -- update operation
router.get('/edit/:id', bookController.displayEditPage);
// post route for processing the edit operation --  update operation
router.post('/edit/:id', bookController.processEditPage);

// Delete operation 
// get to perform delete operation -- deletion
router.get('/delete/:id', bookController.performDelete);


module.exports=router;