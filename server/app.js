const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");

const app = express();

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE;
const PORT = process.env.PORT;

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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}!`);
})