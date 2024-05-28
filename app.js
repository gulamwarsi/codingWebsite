const express =  require("express");
const path = require("path");
const fs = require("fs");
const app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Contactwarsi', {useNewUrlParser: true});
const port = 80;

var Contactschema = new mongoose.Schema({
    Name: String,
    Email: String,
    Contact: String,
    Qualification: String,
    Age: String,
    Address: String,
  });
  var Contact = mongoose.model('Contact', Contactschema);
  

// EXPRESS SPECIFIC STUFF

app.use('/static', express.static('static'))// for serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF

app.set('view engine', 'pug')// set the templet engine as pug
app.set('views', path.join(__dirname, 'views'))// set the views directory

// END POINT
app.get('/', (req, res)=>{
    const con = "This is the content on the internet so far so use it wisely"
    const param = {'title': 'this is best class', content: con}
    res.status(200).render('index.pug')
})
app.post('/', (req, res)=>{
    var myData = new Contact(req.body);
    myData.save();
    const param = {'message': 'your form has been submitted sucessfully',}
    res.status(200).render('index.pug', param)
})
// app.post('/contact', (req, res)=>{
//     Name = req.body.Name
//     Email = req.body.Email
//     contact = req.body.contact
//     Qualification = req.body.Qualification
//     Age = req.body.Age
//     Address = req.body.Address
//     let outputToWrite = `the name of the studtent is ${Name}, ${Email}, ${contact}, ${Qualification}, ${Age} years old, residing at ${Address}`
//     fs.writeFileSync('out.txt', outputToWrite)
//     const param = {'message': 'your form has been submitted sucessfully',}
//     res.status(200).render('index.pug', param);
// })

// START THE SERVER
app.listen(port, ()=>{
    console.log(`the application started sucessfully on port ${port}`)
})

