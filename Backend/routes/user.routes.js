const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const userController = require("../controllers/user.controller");

router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("first name must be at leat 3 characters long"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("password must be 6 characers"),
  ],
  userController.registerUser
);

router.post('/login',[
  body('email').isEmail().withMessage('Invalid Email'),
  body('password').isLength({min:6}).withMessage('Password must be 6 characters')
], userController.loginUser)

module.exports = router;
