const express = require("express");
const router = express.Router();

const check = require("../models/check.model")

router.post("/check", async (req,res) => {
    const data = await check.create(req.body);
    return res.status(201).send({data});
})

module.exports = router;