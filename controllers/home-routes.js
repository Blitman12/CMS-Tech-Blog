const router = require('express').Router();
const { Post, User, Comment } = require('../models');


router.get('/', (req, res) => {
    console.log(req.session)
    res.render('homepage')
})

// Login page
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/')
        return;
    }
    res.render('login')
})

module.exports = router;