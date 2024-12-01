const express = require('express')
const app = express()
const host = "localhost"
const port = 3000

app.get('/', (req, res) => res.send('Cannot Get /HisHeart-'))
app.listen(port, () => console.log(`Multi Store listening on ${host}:${port}!`))