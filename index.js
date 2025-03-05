const express = require('express')
const app = express()



app.get("/", (req, res) => {
    // res.send('Welcome home')
    res.json([
        {"todo_id":Math.floor(Math.random() * 100 + 1), "Title": "Play game", "content": "Play a chess game", "Completed": "true"},
        {"todo_id":Math.floor(Math.random() * 100 + 1), "Title": "Code", "content": "Install VS Code", "Completed": "true"},
        {"todo_id":Math.floor(Math.random() * 100 + 1), "Title": "Watch movie", "content": "Watch movie on netflix", "Completed": "true"},
        {"todo_id":Math.floor(Math.random() * 100 + 1), "Title": "Practice", "content": "Practice makes perfect ", "Completed": "true"},
        {"todo_id":Math.floor(Math.random() * 100 + 1), "Title": "Test", "content": "Pinty piety pay", "Completed": "true"},
        {"todo_id":Math.floor(Math.random() * 100 + 1), "Title": "Classes", "content": "Play a chess game", "Completed": "true"},
        {"todo_id":Math.floor(Math.random() * 100 + 1), "Title": "Show movie", "content": "djhge", "Completed": "true"},
        {"todo_id":Math.floor(Math.random() * 100 + 1), "Title": "Take course", "content": "Play a chess game", "Completed": "true"},
        {"todo_id":Math.floor(Math.random() * 100 + 1), "Title": "Application", "content": "Play a chess game", "Completed": "true"},
        {"todo_id":Math.floor(Math.random() * 100 + 1), "Title": "Show interest", "content": "Play a chess game", "Completed": "true"},
    ])
})



const port = 6001;


app.listen(port, () => {
    console.log('app started at port stated')
})