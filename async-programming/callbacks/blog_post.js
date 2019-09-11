const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => { 
    if (req.url == '/') { 
        fs.readFile('./titles.json', (err, data) => { 
            if (err) { 
                console.error(err)
                res.end('Server Error')
            } else { 
                const title = JSON.parse(data.toString())
                fs.readFile('./titles.html', (err, data) => { 
                    if (err) { 
                        console.error(err)
                        res.end('Server Error')
                    } else { 
                        const templ = data.toString()
                        const html = templ.replace('%', title.join('<li></li>'))
                        res.writeHead(200, { 'Content-Type': 'text/html' })
                        res.end(html)
                    }
                })
            }
        })
    }
})

server.listen(8000, '127.0.0.1')