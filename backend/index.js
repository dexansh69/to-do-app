const express = require("express")

const app = express();
app.use(express.json());
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const { default: mongoose } = require("mongoose");


app.post("/todo", async function (req, res) {
    const todo_user = req.body;
    const checktodo = createTodo.safeParse(todo);
    if (!checktodo.success) {
        res.status(411).json({
            msg: "write title and decsription only"
        })
    }
    // put it on mongo db
    try {
        await todo.create({
            title: todo_user.title,
            description: todo_user.description,
            complete: false

        })
    } catch (error) {
        res.json({
            msg: "database is dead"
        })
    }

    res.send("to do created")


})

// getting all the todos
app.get("/list", async function (req, res) {
    const list = todo.find({});
    res.json({
        list
    })

})
app.put("/completed", async function (req, res) {
    const id = req.body;
    const checkid = updateTodo.safeParse(id);
    if (!checkid.success) {
        res.status(411).json({
            msd: "your token id is not valid "
        })
    }
    
    //   update the status of todo to complete 

        todo.update({
            _id : req.body.id
        },{
            complete : true
        })
        res.json({
            msg: " todo is completed"
        })


})