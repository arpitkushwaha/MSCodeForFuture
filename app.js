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
// ======================== LOGIN ========================
app.get("/signin",function(req,res)
{
    res.render("login");
});

// ======================== REGISTER ========================
app.get("/register",function(req,res)
{
    res.render("register");
});

// ======================== MAIN DASHBOARD ========================
app.get("/dashboard",function(req,res)
{
    res.render("dashboard");
});

// ======================== EMPLOYEE DASHBOARD ========================
app.get("/employee",function(req,res)
{
    res.render("employee");
});

app.listen(process.env.PORT || 3000, function(req,res)
{
    console.log("Server started");
});