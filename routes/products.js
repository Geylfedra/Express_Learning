var express = require('express');

var router = express.Router();

router.get('/', (req, res) => {
    res.send("Get Request For Product");

});

router.get('/get-products-details', (req, res) => {
    res.send("Get Request for Specific Product");
});

module.exports = router;