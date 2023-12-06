const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 5001

// Middlewares (functions that execute when a certain route is hit)
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({extended : true}))  // for parsing application/x-www-form-urlencoded
app.use(express.static('public'))   // for serving static files
app.use(cors()) // for cors policy

// Routes
app.get('/' , (req , res)=>{

   res.send('hello from simple server :)')

})

app.get("/api/v1/users", (req, res) => {

    res.json({
        msg: "hola mundo :)"
    })
});

// app.post();
// app.put();
// app.delete();

// Start the server
app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))