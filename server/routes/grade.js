let express = require('express');
let router = express.Router();
let mongoose = require('mongoose'); // npm i mongoose

// connect with grade model
let Grade = require('../models/grade');
let gradeController = require('../controller/grade')

function requireAuth(req,res,next)
{
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}


// read operations
//get route for the grade list

router.get('/', gradeController.displayGradeList);

// add opertaion
// get route for displaying the add-page -- create operation
router.get('/add',requireAuth, gradeController.displayAddPage);
// post route for processing the add page --  create operation
router.post('/add',requireAuth, gradeController.processAddPage);

// edit opertaion
// get route for displaying the edit operation -- update operation
router.get('/edit/:id',requireAuth,gradeController.displayEditPage);
// post route for processing the edit operation --  update operation
router.post('/edit/:id',requireAuth, gradeController.processEditPage);

// Delete operation 
// get to perform delete operation -- deletion
router.get('/delete/:id',requireAuth,gradeController.performDelete);


module.exports=router;
