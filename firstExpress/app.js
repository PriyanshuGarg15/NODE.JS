var express=require("express");
var app=express();
app.get("/",function(req,res){
	res.send("Welcome to the Home")
})
app.get("/dog",function(req,res){
	res.send("MEOW!")
})
app.get("/bye",function(req,res){
	res.send("See Ya Later!!")
})

app.listen(3000,function(){
	console.log("Server has started at port 3000")
})