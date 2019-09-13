const connect = require("connect")

connect()
    .use((req, res) => { 
        foo()
        res.setHeader("Content-type", "text/plain")
        res.end("Hellor, World!")
    })
    .listen(3000, () => console.log("Listenning on port 3000"))