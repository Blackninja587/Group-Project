let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
// connect with grade model
let Grade = require('../models/grade');

module.exports.displayGradeList = (req,res,next)=>{
    Grade.find((err, gradelist)=>{
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('grade/list',{
                title:'Grades',
                Gradelist: gradelist
            })
        }
    });
}

module.exports.displayAddPage = (req,res,next)=>{
    res.render('grade/add',{title:'Add Grades'})
}

module.exports.processAddPage = (req,res,next)=>{
    let newGrade = Grade ({
        "course_name":req.body.course_name,
        "due_date":req.body.due_date,
        "grade_achieved":req.body.grade_achieved,
        "total_points":req.body.total_points,
        "comment":req.body.comment
    });
    Grade.create(newGrade,(err,Grade) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/grade-list');
        }
    });
}

module.exports.displayEditPage = (req,res,next)=>{
    let id = req.params.id;
    Grade.findById(id,(err, gradeToEdit) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.render('grade/edit',{title:'Edit Grade', grade:gradeToEdit});
        }
    });
}

module.exports.processEditPage = (req,res,next)=>{
    let id=req.params.id;
    let updateGrade = Grade({
        "_id":id,
        "course_name":req.body.course_name,
        "due_date":req.body.due_date,
        "grade_achieved":req.body.grade_achieved,
        "total_points":req.body.total_points,
        "comment":req.body.comment
    });
    Grade.updateOne({_id:id},updateGrade,(err) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/grade-list');
        }
    });
}

module.exports.performDelete = (req,res,next)=> {
    let id = req.params.id;
    Grade.deleteOne({_id:id},(err) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/grade-list');
        }
    });
}