const express = require('express')
const app = require('../app')
const router = express.Router()

// Endpoints
router.get('/', (req, res) => res.render('index'))

// custom middleware for session check
router.use((req, res, next) => req.session.currentUser ? next() : res.render('auth/login-form', { errorMsg: 'Restricted area' }))


router.get('/main', (req, res) => res.render('main', req.session.currentUser))
router.get('/private', (req, res) => res.render('private', req.session.currentUser))

module.exports = router