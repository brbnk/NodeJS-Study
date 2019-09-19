const logger = require("morgan")
const bodyParser = require("body-parser")
const session = require("express-session")
const messages = require("./messages")
const user = require("./user")
const express = require("express")

module.exports = app => { 
    app.use(logger("dev"))
    
    app.use(bodyParser.urlencoded({
        extended: true 
    }))
    
    app.use(express.cookieParser())
    
    // It's best to place the middleware after the cookie middleware is inserted
    app.use(session({ 
        secret: "secret",
        resave: false,
        saveUninitialized: true
    }))

    app.use(user)
    app.use(messages)
}