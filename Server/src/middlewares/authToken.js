const jwt = require("jsonwebtoken");
require("dotenv").config();
User = require("../models/user.model");

const verifyToken = (req, res, next) => {
    if (req.headers && req.headers.authorization !== null) {
        jwt.verify(req.headers.authorization.split(' ')[1], process.env.API_SECRET, function (err, decode) {
            if (err) req.user = undefined;
            User.findOne({
                _id: decode.id
            })
                .exec((err, user) => {
                    if (err) {
                        res.status(500)
                            .send({
                                message: err
                            });
                    } else {
                        req.user = user;
                        next();
                    }
                })
        });
    } else {
        req.user = undefined;
        next();
    }

}
module.exports = verifyToken
