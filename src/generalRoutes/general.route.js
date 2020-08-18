const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authentication');


router.post('/postData', authMiddleware, async (req, res) => {
    try {
        const user = req.user; // replace with async call to post data if the user is authenticated
        res.send({User: user});
    } catch (err) {
        console.error(`postData - failed with error ${err.message}`, err);
        res.status(500).json({message: err.message, stack: err.stack});
    }
});

router.get('/getData', authMiddleware, async (req, res) => {
    try {
        const user = req.user;  // replace with async call to get data, for example data accessible to a specific user based on the authentication
        res.send({User: user});
    } catch (err) {
        console.error(`getData - failed with error ${err.message}`, err);
        res.status(500).json({message: err.message, stack: err.stack});
    }
});

module.exports = router;
