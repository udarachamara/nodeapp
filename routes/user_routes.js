const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
    res.send('GET User route on user routes.');
});

router.get('/:id', function(req, res){
    res.send('The id you specified is ' + req.params.id);
});

router.post('/', function(req, res){
    res.send('POST route on user routes.');
});


module.exports = router;