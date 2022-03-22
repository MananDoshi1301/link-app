require('../db/conn');
const express = require('express');
const User = require('../models/userSchema');

const router = express.Router();


router.get('/', (req, res) => {
  res.send("Hello from server in route!");
})


router.post('/signup', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).json({ error: "Plz fill all fields!" });
  }

  User.findOne({ email: email })
    .then((userExist) => {
      if (userExist) {
        return res.status(422).json({ error: "Email already exists!" });
      }

      const user = new User({ email, password });

      user.save().then(() => {
        res.status(201).json({ message: "User registered succesfully!" });
      }).catch((err) => res.status(501).json({ error: err }));
    }).catch(err => console.log(err));
});

// router.post('/signin', (req, res) => {
//   const { email, password } = req.body;
//   if (!email || !password) {
//     return res.status(422).json({ error: "Plz fill all fields!" });
//   }

//   User.findOne({ email: email });
// });

module.exports = router;