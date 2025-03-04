const express = require('express');
const app = express()



app.get("/", (req, res) => {
    // res.send('Welcome home')
    res.json([
        {"name": "Bimbo", "class": "React"},
        {"name": "Cletus", "class": "Java"},
        {"name": "Clove", "class": "React"},
        {"name": "Frodo", "class": "Node"}
    ])
})



const port = 6001;


app.listen(port, () => {
    console.log('app started at port stated')
})