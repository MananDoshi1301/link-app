const express = require("express");
const mongoose = require("mongoose");

const app = express();
const DB = 'mongodb+srv://manandoshi1301:Manandoshidb@cluster0.m7n4b.mongodb.net/user?retryWrites=true&w=majority';

mongoose.connect(DB, {
  useNewUrlParser: true,
  // useCreateIndex: true,
  useUnifiedTopology: true,
  // useFindAndModify: false
}).then(() => {
  console.log('Db connected!');
}).catch((err) => {
  console.log(err);
})

app.get('/', (req, res) => {
  res.send("Hello from server!");
})

app.get('/signin', (req, res) => {
  res.send("Hello to signin from server!");
})

app.get('/signup', (req, res) => {
  res.send("Hello to signup from server!");
})

app.listen(3000, () => {
  console.log("Server is running!"); ``
})