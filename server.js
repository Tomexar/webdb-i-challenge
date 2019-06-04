const express = require('express');

const server = express();
const accountsRouter = require('./data/accountsRouter')
server.use(express.json())

server.use('/accounts', accountsRouter)

// your code here
server.get('/', (req, res)=>{
    res.status(200).json({ message: 'hello'})
})
module.exports = server;