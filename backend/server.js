const express = require("express");
const app = express();
const connectDb = require("./config/connectDb");
//4-CREATE THE SCHEMA
const User = require("./models/User");
// PARSE THE DATA TO JSON
app.use(express.json());

//2-CONNECT THE DATABASE
connectDb();

/***********START THE CRUD****************/
//ADD USER
//path:/api/users
app.post("/api/users", (req, res) => {
  const { FirstName, LastName, Phone, Email } = req.body;
  const user = new User({ FirstName, LastName, Phone, Email });
  user
    .save()
    .then((NewUser) => res.send(NewUser))
    .catch((err) => res.send({ msg: "Add error", err }));
});

//GET ALL USERS
//PATH :/api/users
app.get("/api/users/", (req, res) => {
  User.find()
    .then((users) => res.send(users))
    .catch((err) => res.send({ msg: "get error", err }));
});

//GET USER BY ID
//path :/api/users/:userId
app.get("/api/users/:userId", (req, res) => {
  const id = req.params.userId;
  User.findById(id)
    .then((user) => {
      if (!user) {
        return res.send({ msg: "user not found" });
      }
      res.send({ msg: "user is found", user });
    })
    .catch((err) => res.status(400).send({ msg: "user is not found", err }));
});

//EDIT USER BY ID
//path :/api/users/:userId
app.put("/api/users/:userId", (req, res) => {
  const id = req.params.userId;
  User.findByIdAndUpdate(id, req.body, { new: true })
    .then((updatedUser) => {
      if (!user) {
        return res.send({ msg: "user not found" });
      }
      res.send(updatedUser);
    })
    .catch((err) => res.send({ msg: "edit error", err }));
});
//DELETE USER BY ID
//path:/api/users/:userId
app.delete("/api/users/:userId", (req, res) => {
  const id = req.params.userId;
  User.findByIdAndDelete(id)
    .then((user) => {
      if (!user) {
        return res.send({ msg: "user not found" });
      }
      res.send({ msg: "user deleted with success", user });
    })

    .catch((err) => res.status(400).send({ msg: "delete error", err }));
});

// 1-START THE SERVER
const port = 5002;
app.listen(port, () => console.log(`the server is running on ${port}`));
// 3- SETUP ENV VARIABLES