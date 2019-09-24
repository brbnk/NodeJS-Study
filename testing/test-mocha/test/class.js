module.exports = class Memdb { 
    constructor() { 
        this.db = []
    }

    saveSync(doc, cb) { 
        this.db.push(doc)

        if (cb) { 
            setTimeout(() => { 
                cb()
            }, 1000)
        }
    }

    first(obj) { 
        return this.db.filter((doc) => {
            for (let key in obj) { 
                return obj[key] == doc[key]
            }
            return true
        }).shift()
    }

    clear() { 
        this.db = []
    }
} 