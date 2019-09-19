const User = require('../../models/user')
const user = new User({name: "Teste", pass: "teste"})

// user.save((err) => { 
//     if (err) console.log(err)
//     console.log('user id %d', user.id)
// })

User.getByName("Teste", (err, user) => { 
    console.log(user)
})