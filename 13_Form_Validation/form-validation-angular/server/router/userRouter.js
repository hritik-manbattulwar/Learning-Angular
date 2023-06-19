const express = require("express");
const router = express.Router();

/* 
URL :http:127.0.0.1:5000/user/enroll
Usage: Enrollment
Method: POST
Fields: username, email, password, course
*/
router.post("/enroll", (req, res) => {
  let enrollment = req.body;
  console.log(enrollment);
  res.status(200).json({
    msg: "Enrolment is Success",
  });
});

/* 
URL :http:127.0.0.1:5000/user/register
Usage: Registration
Method: POST
Fields: username, email, password, course
*/
router.post("/register", (req, res) => {
  let registration = req.body;
  console.log(registration);
  res.status(200).json({
    msg: "Registration is Success",
  });
});

module.exports = router;
