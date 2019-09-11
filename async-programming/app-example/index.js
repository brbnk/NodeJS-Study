const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const articles = [{ title: "Example" }]
const Article = require("./db").Article
const read = require("node-readability")

// Configs
app.set('port', process.env.port || 3000)

// Middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Endpoints
app.get('/articles', (req, res, next) => { 
    res.send(articles)
})

app.get('/articles/:id', (req, res, next) => { 
    const id = req.params.id
    console.log('Fetching:', id)
    res.send(articles[id])
})

app.delete('/articles/:id', (req, res, next) => { 
    const id = req.params.id
    console.log('Deleting:', id)
    delete articles[id]
    res.send({ message: 'Deleted' })
})

app.listen(app.get('port'), () => { 
    console.log('App started on port ', app.get('port'))
})

app.post("/articles", (req, res, next) => { 
    const url = req.body.url

    read(url, (err, result) => { 
        if (err || !result) res.status(500).send("Erro downloading article")
        Article.create(
            { title: result.title, content: result.content },
            (err, article) => { 
                if (err) return next(err)
                res.status(200).send('OK');
            }
        )
    })
})

module.exports = app;