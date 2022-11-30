let express = require('express');

module.exports.displayHomePage = (req, res, next) =>{
    res.render('index', { title: 'Home'});
}