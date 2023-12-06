const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 5001

// Middlewares
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(express.static('public'))


app.get('/' , (req , res)=>{

   res.send('hello from simple server :)')

})

app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))