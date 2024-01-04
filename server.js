const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
const mongoose = require("mongoose");


require('dotenv').config()


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
// app.use(bodyParser.urlencoded({ extended: true}))
// app.use(bodyParser.json()) 


// MongoClient.connect(connectionString, {useUnifiedTopology: true })
//     .then(client => {
//         console.log('Connected to Anime Database')
//         const db = client.db('anime--words')
//         const wordsCollection = db.collection('words')
       
//     })        .catch(console.error( error => console.error(error)))
        
// mongoose
// .connect(process.env.DBCONNECTION)
// .then(() => {
//   console.log("Connected to MongoDB");
// }) 
// .catch((err) => {
//   console.log(err);
// });
    app.get('/', (req, res) => {
            res.render('index.ejs')
    })
        app.get('/words', (req, res) => {
            // db.collection('words')
            // .find()
            // .toArray()
            // .then(results => {
            //     // console.log(results);
            //     res.render('words.ejs', {words: results})
            // }).catch(error => console.error(error)) 
             res.render('words.ejs')
        })
        app.get('/add', (req, res) => {
            res.render('add')
    })
    app.get('/dashboard', (req, res) => {
        res.render('dashboard')
})

app.get('/delete', (req, res) => {
    res.render('delete')
})
        
        // app.post('/word', (req, res) => {
        //     console.log(req.body);
        //     wordsCollection
        //     .insertOne(req.body)
        //     .then(result => {
        //         console.log(result)
        //         res.redirect('/')
        //     })
        //     .catch(error => console.error(error))
        // }) 
        
        app.listen(4000, () => {
            console.log('Connected to port 4000');
        })



