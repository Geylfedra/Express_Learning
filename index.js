var express = require('express');
var app = express();
// Routes
var products = require('./routes/products');
var users = require('./routes/users');
// App Use (Import Module/Routes)
app.use('/products', products);
app.use('/users', users);
app.listen(3000);

/*
        Building E-Commerce Application
            - Users
            - Products
            - Items
            - Reviews
            - Comments
            - Images
            - Videos
            - Returns
            - Orders
            All Require CRUD operation
*/

/* Catatan dan Revisi

UI -> Request   -> API -> Middleware -> Handler
1. Security Check Of user's token/access/auth
2. Body Parsing Of the Request
3. Sanitizing
4. Logged - most common use case

 CRUD IN EXPRESS
 POST = CREATE
 GET = READ
 PUT = UPDATE
 DELETE = DELETE

 CRUD ada Di Routes

app.get('/GetUser', function(req, res) {
res.send("Hello World !");
});


app.get('/GetTraining', function(req, res) {
var trainingObj = {
trainingId: 10,
trainingName: "Express Tutorial Course",
active: true

}
res.send(trainingObj);
});
*/