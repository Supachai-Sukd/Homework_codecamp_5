const express = require('express')
const router = express.Router()

router.get('/form', (req, res) => {
    res.send('User page')
})


module.exports = router