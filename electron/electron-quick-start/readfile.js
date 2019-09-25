const fs = require("fs")

module.exports = (cb) => { 
    fs.readFile("./main.js", { enconding: "utf-8" }, cb)
}