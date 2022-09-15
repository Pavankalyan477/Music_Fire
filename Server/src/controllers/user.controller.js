const express = require("express");
const app =express();
var cookieParser = require('cookie-parser');
app.use(cookieParser());
const router = express.Router();
require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const User = require("../models/user.model");
verifyToken = require("../middlewares/authToken")

router.post("/register", async (req, res) => {
    const { username, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 12);
        const user = User({
            username: username,
            password: hashedPassword
        });
        req.body.password = hashedPassword;
        await User.create(req.body);
        res.status(201).send("successfully Created")
    } catch (error) {
        console.log(error);
    }
});


router.post("/login", async (req, res) => {
    User.findOne({
        username: req.body.username
    }).exec((err, user) => {
        if (err) {
            res.status(500)
                .send({
                    message: err
                });
            return;
        }
        if (!user) {
            return res.status(404)
                .send({
                    message: "User Not found."
                });
        }
            //comparing passwords
            var passwordIsValid = bcrypt.compareSync(
              req.body.password,
              user.password
            );
            // checking if password was valid and send response accordingly
            if (!passwordIsValid) {
              return res.status(401)
                .send({
                  accessToken: null,
                  message: "Invalid Password!"
                });
            }
            //signing token with user id
            
            var token = jwt.sign({
              id: user.id
            },process.env.API_SECRET, {
              expiresIn: 86400
            });
            //responding to client request with user profile success message and  access token .
            res.status(200).cookie("music",token)
              .send({
                user: {
                  id: user._id,
                  username: user.username,
                },
                message: "Login successfull",
                accessToken: token,
              });
    });
})

router.get("/hiddencontent", verifyToken, function (req, res) {
 
  if (!User) {
    res.status(403)
      .send({
        message: "Invalid JWT token"
      });
  }
  if (req.user) {
    res.status(200)
      .send({
        message: "Congratulations! but there is no hidden content"
      });
  } else {
    res.status(403)
      .send({
        message: "Unauthorised access"
      });
  }
});
// app.get('/', function(req, res){
//   res.cookie('music', token).send('cookie set'); //Sets name = express
// });
module.exports = router;