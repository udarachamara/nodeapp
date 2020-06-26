const express = require('express')
const router = express.Router()

router.get('/', function(req, res){
    res.send('Hello World..!')
});

router.get('*', function(req, res){
    res.send('Sorry, this is an invalid URL.')
});

module.exports = router;