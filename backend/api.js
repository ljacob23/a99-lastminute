const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('hello, there')
})

router.get('/contributors', (req, res) => {
    res.send('Sam, Lingling, Jackson, Hyunmo, Eric')
})

module.exports = router