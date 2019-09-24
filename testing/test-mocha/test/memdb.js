const Memdb = require("./class")
const assert = require("assert")

const memdb = new Memdb()

describe("memdb", () => { 
    // beforeEach((done) => {
    //     memdb.clear(done)
    // })

    // describe("asynchronous .save(doc)", () => { 
    //     it ("should have the document", (done) => { 
    //         const pet = { name: "Tobi" }
            
    //         memdb.saveSync(pet, () => { 
    //             const ret = memdb.first({ name: "Tobi" })
    //             assert(ret == pet)
    //             done()
    //         })
    //     })
    // })
    
    describe(".first(obj)", () => { 
        it ("should return the first matching doc", () => {
            const tobi = { name: "Tobi"}
            const loki = { name: "Loki" }

            memdb.saveSync(tobi)
            memdb.saveSync(loki)

            let ret = memdb.first({ name: "Tobi" })
            assert(ret == tobi)

            ret = memdb.first({ name: "Loki" })
            assert(ret == loki)
        })

        it ("should return null when no doc matches", () => { 
            const ret = memdb.first({ name: "Manny" })
            assert(ret == null)
        })
    })
}) 