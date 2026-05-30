# Mongoose: Schema vs Model

## 1. Schema

Schema is just a blueprint/rule book.

Example:

```js
const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});
```

This only defines:

- What fields exist
- What type each field has

Schema DOES NOT interact with the database.

Think:

Schema = House Blueprint 🏠

---

## 2. Model

```js
const Todo = mongoose.model("todos", todoSchema);
```

Read it as:

"Create a Todo model using todoSchema and connect it to the 'todos' collection."

Think:

Model = Builder 👷

A model can actually talk to MongoDB.

---

## 3. Why do we need a Model?

Because schema only defines structure.

Database operations are done through the model.

Examples:

```js
await Todo.create({...});
await Todo.find({});
await Todo.findOne({...});
await Todo.updateOne({...});
await Todo.deleteOne({...});
```

These methods belong to the MODEL, not the schema.

---

## 4. What does "todos" mean?

```js
mongoose.model("todos", todoSchema)
```

"todos" = MongoDB collection name

MongoDB:

todos
 ├── document1
 ├── document2
 └── document3

---

## 5. Flow

Schema
   ↓
todoSchema
   ↓
mongoose.model("todos", todoSchema)
   ↓
Todo Model
   ↓
create/find/update/delete
   ↓
MongoDB Collection

---

## 6. Easy Memory Trick

Schema = Rules

Model = Operations

Schema = Structure

Model = Database Access

Schema = Blueprint 🏠

Model = Builder 👷

---

## Example

```js
const todoSchema = new mongoose.Schema({
    title: String,
    completed: Boolean
});

const Todo = mongoose.model("todos", todoSchema);

await Todo.create({
    title: "Learn Mongoose",
    completed: false
});
```

Result in MongoDB:

{
    "_id": "...",
    "title": "Learn Mongoose",
    "completed": false
}