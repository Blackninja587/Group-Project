let mongoose = require('mongoose');

// create a ____ model
let gradeModel = mongoose.Schema({
    course_name: String,
    due_date: String,
    grade_achieved: String,
    total_points: String,
    comment: String
    },
    {
        collection: "grades"
    }
);
module.exports = mongoose.model('Grade',gradeModel);