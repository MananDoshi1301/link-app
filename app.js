const express = require("express");

const app = express();

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