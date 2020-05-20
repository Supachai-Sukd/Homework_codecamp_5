const express = require('express')
const router = express.Router()

router.get('/walk', (req, res) => {
    res.send('dog walk')
})

router.get('/play', (req, res) => {
    res.send('dog play')
})

router.get('/eat', (req, res) => {
    res.send('cat eat')
})

router.get('/sleep', (req, res) => {
    res.send('cat sleep')
})

module.exports = router