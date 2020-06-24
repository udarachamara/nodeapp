const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
    res.send('GET User route on user routes.');
});
router.post('/', function(req, res){
    res.send('POST route on user routes.');
});


module.exports = router;