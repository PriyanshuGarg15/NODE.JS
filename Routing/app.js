var express=require("express");
var app=express();
app.get("/",function(req,res){
	res.send("Hi there, Welcome to the Home")
})
app.get("/speak/:animal",function(req,res){
	var animal=req.params.animal;
	if (animal=="pig"){
		res.send("The pig says 'Oink'");
	}
	if (animal=="cow"){
		res.send("The cow says 'Moo'");
	}
	if (animal=="dog"){
		res.send("The dog says 'Woof Woof!'");
	}
})
app.get("/repeat/:string/:times",function(req,res){
	var string=req.params.string;
	var times=Number(req.params.times);
	var print="";
	for (i=0;i<times;i++){
		print+=string+"  ";
	}
	res.send(print)
})

app.get("*",function(req,res){
	res.send("sorry page doesnt found");
})

app.listen(3000,function(){
	console.log("Server has started at port 3000")
})