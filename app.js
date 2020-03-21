const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine",'ejs');
app.use(express.static(__dirname+"/public"));

app.get("/",function(req,res)
{
    res.render("home");
});

app.listen(process.env.PORT || 3000, function(req,res)
{
    console.log("Server started");
});