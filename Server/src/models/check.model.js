const mongoose = require("mongoose");


const checkSchema = new mongoose.Schema({
    title: { type:String, required: true },
    body: { type: String, required: true },
});

const check = mongoose.model("checking",checkSchema);

module.exports = check;