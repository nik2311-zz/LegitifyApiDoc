const express = require('express')
const app = express()

var port =  process.env.APPPORT;
app.use('/docs',express.static('build'))
app.listen(port, () => console.log('Example app listening on port 3000!'))
