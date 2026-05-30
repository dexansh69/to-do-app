const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://devansh69:Devansh69@cluster0.6pjp4rg.mongodb.net/todos");

const todoSchema = mongoose.Schema({
    title : title,
    description : description,
    complete : boolean
})

const todo = mongoose.model("todos",todoSchema)

module.exports = {
    todo
}