require('../db/conn');
const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/userSchema');
const Links = require('../models/linkSchema');

const router = express.Router();


// router.get('/', (req, res) => {
//   res.send("Hello from server in route!");
// })

const print = (content) => {
  console.log(content);
}

// Using promises

// router.post('/signup', (req, res) => {
//   const { email, password } = req.body;
//   if (!email || !password) {
//     return res.status(422).json({ error: "Plz fill all fields!" });
//   }

//   User.findOne({ email: email })
//     .then((userExist) => {
//       if (userExist) {
//         return res.status(422).json({ error: "Email already exists!" });
//       }

//       const user = new User({ email, password });

//       user.save().then(() => {
//         res.status(201).json({ message: "User registered succesfully!" });
//       }).catch((err) => res.status(501).json({ error: err }));
//     }).catch(err => console.log(err));
// });

// router.post('/signin', (req, res) => {
//   const { email, password } = req.body;
//   if (!email || !password) {
//     return res.status(422).json({ error: "Plz fill all fields!" });
//   }

//   User.findOne({ email: email });
// });

router.post('/signup', async (req, res) => {

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(422).json({ message: "Please fill all fields!" });
  }

  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ message: "Email already exists!" });
    }
    else {
      const user = new User({ email, password });
      const savedUser = await user.save();
      if (savedUser) res.status(201).json({ message: "User registered succesfully!" });
    }

  }
  catch (err) {
    console.log(err)
  }

});

router.post('/signin', async (req, res) => {

  try {

    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(422).json({ message: "Please fill all fields!", error: true });
    }

    const userExist = await User.findOne({ email: email });
    console.log(userExist._id);
    if (!userExist) {
      res.status(400).json({ message: "User Error", error: true });
    }
    else {
      const isPasswordCorrect = await bcrypt.compare(password, userExist.password);
      if (isPasswordCorrect) res.json({ message: "User signed in succesfully!", id: userExist._id, error: false });
      else res.json({ message: "Incorrect username or password", error: true });
    }

  } catch (err) {
    console.log(err);
  }
});

router.get('/link-page/:id', async (req, res) => {
  // console.log(req.params.id)

  try {
    const data = await Links.find({ userid: req.params.id });
    // console.log(data);
    res.json({
      message: "success",
      data: data[0].links
    })
  } catch (err) {
    console.log(err);
  }
  // res.json({ message: 'done' })
})

router.post('/link-page/add-link', async (req, res) => {

  try {
    const { userid, links } = req.body;
    const { title, url } = links;
    // console.log(userid, title, url)
    if (!userid || !title || !url) {
      return res.status(422).json({
        error: true, message: "Please fill all details",
      });
    }

    const doesUserDocExist = await Links.find({ userid: userid });
    // res.json({ id: userid })

    if (doesUserDocExist.length == 0) {
      // print("Adding new doc")
      const linkDoc = new Links({ userid, links: [{ title, url }] });
      const savedDoc = await linkDoc.save();

      if (savedDoc) res.status(201).json({
        message: "Link added succesfully", error: false
      })
    }
    else {
      // print("Updating doc")
      const savedDoc = await Links.findOneAndUpdate({
        userid: userid
      }, {
        $push: {
          links: { title, url },
        }
      })

      if (savedDoc) res.status(201).json({
        message: "Link saved succesfully", error: false
      })
    }


  }
  catch (err) {
    console.log(err);
  }
});

module.exports = router;