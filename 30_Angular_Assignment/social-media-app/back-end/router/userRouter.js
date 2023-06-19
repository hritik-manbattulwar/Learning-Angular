const express = require("express");
// import { express } from "express";
const router = express.Router();
const User = require("../model/User");
const bcrypt = require("bcryptjs");

const { body, validationResult } = require("express-validator");

/*
    USAGE : Register a User
    URL	/user/register
    Fields	name , email , password
    Method	POST
    Access	PUBLIC
 */
router.post(
  "/register",
  [
    body("name").notEmpty().withMessage("Name is Required"),
    body("email").notEmpty().withMessage("Email is Required"),
    body("password").notEmpty().withMessage("Password is Required"),
  ],
  async (request, response) => {
    let errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(401).json({
        errors: errors.array(),
      });
    }
    try {
      let { name, email, password } = request.body;

      // if the user already exists
      let user = await User.findOne({ email: email });
      if (user) {
        return response.status(401).json({
          errors: [{ msg: "User is Already Exists" }],
        });
      }

      // encrypt the password
      let salt = await bcrypt.genSalt(10);
      password = await bcrypt.hash(password, salt);

      // store into database
      user = new User({ name, email, password });
      user = await user.save();
      response.status(200).json({
        result: "Registration is Success",
      });
    } catch (error) {
      console.error(error);
      response.status(500).json({
        errors: [{ msg: `Server Error ${error}` }],
      });
    }
  }
);

/*
    USAGE : Login a User
    URL	/user/login
    Fields	email , password
    Method	POST
    Access	PUBLIC
 */
router.post(
  "/login",
  [
    body("email").notEmpty().withMessage("Email is Required"),
    body("password").notEmpty().withMessage("Password is Required"),
  ],
  async (request, response) => {
    let errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(401).json({
        errors: errors.array(),
      });
    }

    try {
      let { email, password } = request.body;

      // check email is exists or not
      let user = await User.findOne({ email: email });
      if (!user) {
        return response.status(401).json({
          errors: [{ msg: "User Doesn't Exist" }],
        });
      }

      // check password
      let isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return response.status(401).json({
          errors: [{ msg: "Invalid Credentials" }],
        });
      }

      // create a json web token and send to client
      let payload = {
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
        },
      };
      return response.status(200).json({
        result: "Login Success",
        user: user,
      });
    } catch (error) {
      console.error(error);
      response.status(500).json({
        errors: [{ msg: `Server Error ${error}` }],
      });
    }
  }
);

module.exports = router;
