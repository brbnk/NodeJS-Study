module.exports = app => { 
    app.get("/logout", (req, res) => { 
        req.session.destroy(err => { 
            if (err) throw err
            res.redirect("/")
        })
    })
}