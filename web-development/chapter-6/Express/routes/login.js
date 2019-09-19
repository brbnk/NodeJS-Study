const User = require("../models/user")

module.exports = app => { 
    app.get("/login", (req, res) => { 
        res.render("login", { titlte: "Login" })
    })

    app.post("/login", (req, res, next) => { 
        const data = req.body.user
        User.authenticate(data.name, data.pass, (err, user) => { 
            if (err) return next(err)
            if (user) { 
                req.session.uid = user.id
                res.redirect("/")
            } else { 
                res.error("Sorry! Invalid Credentials.")
                res.redirect("Back")
            }
        })
    })
}