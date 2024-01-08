const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const AnimeWord = require('./models/words.js');
const mongoose = require("mongoose");
require('dotenv').config()


// middleware
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


// connect to the database
mongoose 
.connect(process.env.DBCONNECTION)
.then(() => {
  console.log("Connected to MongoDB");
}) 
.catch((err) => {
  console.log(err);
});


// homepage
app.get('/', (req, res) => {
    res.render('home')
})

// show all words
app.get('/words', (req, res) => {

AnimeWord
  .find() 
  .then(results => {
    console.log(results)
     res.render('words',  {words:results})
    }).catch(error => {
      res.send(error)
      console.error(error)})   
})

// add words 
app.get('/add', (req, res) => {
    res.render('add')
})


  
// add a word
app.post('/word', (req, res) => {
    // console.log(req.body);
    // console.log(req.body.animeWord); 
    // console.log(req.body.meaning);
    const word = new AnimeWord ({
        animeWord: req.body.animeWord, 
        meaning: req.body.meaning
        });
        word.save()
        .then(() => {
            console.log('Item succedfully added to the database');
            res.redirect('/word')
            })
        .catch((err) => {
            console.log(err);
        });
    
    })


    // show the dashboard
// app.get('/dashboard', (req, res) => {
// res.render('dashboard')
// })

// delete a wpord
// app.get('/delete', (req, res) => { 
//     res.render('delete')
// })

app.listen(4000, () => {
    console.log('Connected to port 4000');
})



