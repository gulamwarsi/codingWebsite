const express =  require("express");
const path = require("path");
const app = express();
const port = 80;

// for serving static files
app.use('/static', express.static('static'))

// set the templet engine as pug
app.set('view engine', 'pug')

// set the views directory
app.set('views', path.join(__dirname, 'views'))

app.get('/dmo', (req, res) => {
    res.status(200).render('dmo', { title: 'Hey Gulam', message: 'Hello there and thanks for telling me how to use pug!' })
  })


app.get("/", (req, res)=>{
    res.send("this is homepage of my first express app")
});
app.get("/about", (req, res)=>{
    res.send("this is aboutpage of my first express app")
    });

app.post("/about", (req, res)=>{
    res.status(400).send("this is a post request aboutpage of my first express app")
});

app.listen(port, ()=>{
    console.log(`the application started sucessfully on port ${port}`)
})

