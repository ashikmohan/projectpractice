const express=require('express');
const app= express();
const morgan=require('morgan');
const bcrypt=require('bcrypt');
const cors=require('cors')
const bodyParser=require('body-parser');
const mongoose = require('mongoose');

const User = require('./models/index2');

require('./db/index')

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// app.post('/signup',(req,res)=>{
//   bcrypt.hash(req.body.password,10)
//   .then(hash=>{
//     const UserModel=new UserModel({
//       email:req.body.email,
//       password:hash
//     })
//     UserModel.save()
//     .then(result=>{
//       res.status(201).json({
//         message:'User Created',
//         result: result
//       })
//       .catch(err=>{
//         res.status(400).json({
//           error:err
//         })
//       })
//     })

//   })
  


// })

app.post('/signup',(req,res)=>{
  const user=new User({
    email:req.body.email,
    password:req.body.password
  });
  user.save()
  .then(() => {
    res.status(201).json({ message: 'User created successfully' });
  })
  .catch(error => {
    res.status(500).json({ error: error.message });
  });
});

// User login
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email, password })
    .then(user => {
      if (user) {
        res.status(200).json({ message: 'Login successful' });
      } else {
        res.status(401).json({ error: 'Invalid username or password' });
      }
    })
    .catch(error => {
      res.status(500).json({ error: error.message });
    });
});


// app.post('/login', (req, res) => {
//   const { email, password } = req.body;

//   User.findOne({ email })
//     .then(user => {
//       if (user) {
//         // Compare the stored password with the provided password
//         if (user.password === password) {
//           res.status(200).json({ message: 'Login successful' });
//         } else {
//           res.status(401).json({ error: 'Invalid password' });
//         }
//       } else {
//         res.status(401).json({ error: 'Invalid username' });
//       }
//     })
//     .catch(error => {
//       res.status(500).json({ error: error.message });
//     });
// });



// app.post('/login', (req, res) => {
//   const { email, password } = req.body;

//   UserModel.findOne({ email })
//     .then(user => {
//       if (user) {
//         // Compare the stored password with the provided password using a secure password hashing algorithm
//         bcrypt.compare(password, user.password, (err, result) => {
//           if (err) {
//             res.status(500).json({ error: err.message });
//           } else if (result) {
//             res.status(200).json({ message: 'Login successful' });
//           } else {
//             res.status(401).json({ error: 'Invalid password' });
//           }
//         });
//       } else {
//         res.status(401).json({ error: 'Invalid username' });
//       }
//     })
//     .catch(error => {
//       res.status(500).json({ error: error.message });
//     });
// });




app.listen(3000,()=>{
    console.log('Server started at port 3000')
});