const EventEmitter = require('events').EventEmitter
const net = require("net")
const channel = new EventEmitter()
const PORT = 8000

channel.clients = {}
channel.subscriptions = {}

channel.on('join', function (id, client) { 
    this.clients[id] = client
    this.subscriptions[id] = (senderId, message) => { 
        if (id != senderId) { 
            this.clients[id].write(message)
        }
    }

    this.on('broadcast', this.subscriptions[id])
})

const server = net.createServer(client => { 
    const id = `${client.remoteAddress}:${client.remotePort}`
    channel.emit('join', id, client)
    client.on('data', data => { 
        data = data.toString()
        channel.emit('broadcast', id, data)
    })
})

server.listen(PORT, () => { 
    console.log(`Listening on Server 127.0.0.1, Port: ${PORT}`)
})