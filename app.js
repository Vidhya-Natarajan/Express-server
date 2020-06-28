const express = require('express')
var cors = require('cors')
const app = express()
const port = 5000

app.use(cors())
app.get('/', (req, res) => res.send(({ hydrogen: '45' })));  

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))