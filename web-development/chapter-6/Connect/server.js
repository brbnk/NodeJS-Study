const connect = require("connect")

function logger(req, res, next) { 
    console.log(`${req.method} ${req.url}`)
    next();
}

function hello(req, res, next) { 
    res.setHeader("Content-type", "text/plain")
    res.end("Hello, World!")
}

connect()
    .use(logger)
    .use(hello)
    .listen(3000)