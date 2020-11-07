const jwt = require("jsonwebtoken");
const config = require("../config/config.js");
const db = require("../models");

verifyToken = (req, res, next) => {

    let authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(' ')[1]
    if (!token) {
        return res.status(403).send({
            message: "No token provided!"
        });
    }

    jwt.verify(token, config.auth.secret, (err, decoded) => {
        if (err) {
            return res.status(401).send({
                message: "Unauthorized!"
            });
        }

        console.log(decoded);
        req.userId = decoded.id;

        next();
    });
};


const authJwt = {
    verifyToken: verifyToken
};

module.exports = authJwt;
