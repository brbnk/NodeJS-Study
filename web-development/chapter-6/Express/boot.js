const PORT = process.env.PORT || 3000

module.exports = app => { 
    app.listen(PORT, () => console.log(`Listenning on port ${PORT}`))
}