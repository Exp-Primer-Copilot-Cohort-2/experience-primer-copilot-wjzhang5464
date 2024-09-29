// Create web server
const express = require('express')
const app = express()
const port = 3000

// Create a route for the home page
app.get('/', (req, res) => res.send('Hello World!'))

// Create a route for the comments page
app.get('/comments', (req, res) => res.send('Comments page'))

// Start the server
app.listen(port, () => console.log(`Example app listening on port ${port}!`))