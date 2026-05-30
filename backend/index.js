const express = require("express")
const app = express();
app.use(express.json());
const {createTodo,updateTodo} =require("/type.js");
app.post("/todo",function(req,res){

})
app.get("/list",async function(req,res){

})
app.put("/completed",async function(req,res){

})