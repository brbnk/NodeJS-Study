const app = require("express")()
const consign = require('consign')

consign({verbose: false})
    .include("configs")
    .then("middlewares")
    .then("routes")
    .then("./boot.js")
    .into(app)