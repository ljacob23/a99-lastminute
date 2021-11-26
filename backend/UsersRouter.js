const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
    res.json([
        { id: 1, username: "sam" },
        { id: 2, username: "lingling" },
        { id: 3, username: "jackson" }, 
        { id: 4, username: "hyunmo" },
        { id: 5, username: "eric" },
    ])
})

router.get("/user1", (req, res) => {
    res.json({ id: 1, username: "sam" })
})

router.post('/create', (req, res) => {
    // pull stuff out of the request and make a user
    res.json({ result: 'User Successfully Created' })
})

module.exports = router