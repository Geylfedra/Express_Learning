var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.send("Ini Halaman Users")
});

router.post('/create-user', (req, res) => {
    res.send("Creating User");
});

router.put('/update-user', (req, res) => {
    res.send("Updating User");
});

router.get('/get-user-details/:id', (req, res) => {
    res.send("Get Request For Specific User " + req.params.id);
});

router.get('/search-by-location/:state/:city', (req, res) => {
    res.send("Get Request For Specific User by Location " + req.params.state + " " + req.params.city);
});

// [0-9] dan [a-zA-Z] -> Admitted Character
//  {5} -> Panjang Variable

router.get('/search/:key([0-9]{4})', (req, res) => {
    res.send("Data Captured Is : " + req.params.key);
});

router.get('/search-by-username/:user([a-zA-Z]{4})', (req, res) => {
    res.send("Data Captured Is : " + req.params.user);
});

router.get('*', (req, res) => {
    var resObj = {
        statusCode: 404,
        statusMsg: "Url Not Found"
    }

    res.send(resObj);
})

router.get('/read-all-user', (req, res) => {
    res.send("List All User");
});

router.delete('/delete-user', (req, res) => {
    res.send("Deleting User");
})

module.exports = router;