const express= require('express')
const app = express()
const port = 5000
const bodyParser = require("body-parser")
const {Content} = require("./models/Content");

//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}))

//application/json - json타입을 분석해 가져온다.
app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://test_username:0000@cluster0-amulf.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
    
}).then(()=>console.log('connect')).catch(err=>console.log(err))

app.get('/', (req, res)=> res.send('hello'))

app.post('/register', (req,res)=>{
    const content = new Content(req.body)

    content.save((err, contentInfo) => {
        if(err) return res.json({success: false, err})
        return res.status(200).json({
            success: true
        })
    })
    
app.delete('/register', (req,res)=>{
    const 
})
// mongodb에서 오는 메소드
})
app.listen(port, ()=>console.log(`express app ${port}!`));