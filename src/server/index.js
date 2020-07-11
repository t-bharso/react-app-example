const express = require('express')
const app = express()

app.use(express.static(__dirname, 'public'))
app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>')
})
const PORT = process.env.port || 5000
app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`)
})