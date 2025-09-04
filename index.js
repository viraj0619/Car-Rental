var express = require("express");
var bodyparser = require("body-parser");
var upload = require("express-fileupload");
const session = require('express-session');
var app = express();

app.use(upload());
app.use(bodyparser.urlencoded({extended:true}));

app.use(session({
    secret: 'Car_Rental Project by Team no 5 A2z infotech pvt Ltd',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set secure to true if using HTTPS
}));
app.use(express.static("public/"));

var user_route = require("./routes/user_route");
var admin_route = require("./routes/admin_route");


app.use("/admin",admin_route);
app.use("/",user_route);



app.listen(1001);
