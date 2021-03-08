const express = require('express')
const path = require("path")
const app = express()
const port = process.env.PORT || 5000
app.use(express.static('./client/public'))

//set up a route to solve all article titles as JSON
app.get('/api/directory',(req,res)=>{
    res.sendFile(path.resolve('./api/directory.json'))
})
//go to resturant page
app.get('/resturant/api/:name',(req,res)=>{
    let name = req.params.name
    res.sendFile(path.resolve(`./api/${name}.json`))
})
// app.get('*', (req,res) => {
//     res.sendFile(path.resolve("./client/build/index.html"))
// })

app.listen(port, ()=> {
    console.log(`Listening to port `,port)
})