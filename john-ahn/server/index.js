const express= require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser');
const {User} = require("./model/User") 

//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended : true}));

//application/json - json타입을 분석해 가져온다. 
app.use(bodyParser.json());

const mongoose = require('mongoose')
const { useParams } = require('react-router-dom')
mongoose.connect('mongodb+srv://test_username:0000@cluster0-amulf.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(()=>console.log('connect')).catch(err=>console.log(err))

//회원가입 라우트 Line.19~Line33 - 중요 -  
app.get('/', (req, res)=> res.send('hexllo'))

app.post('/register', (req, res)=>{
    //회원가입시 필요한 정보들을 client에서 가져오면
    //그것들을 db에 넣어준다.
    const user = new User(req.body)
    user.save((err, userInfo) =>{
        if(err) return res.json({success: false, err})
        return res.status(200).json({
            sucess: true
        })
    })
    // mongodb에서 오는 메소드
})

app.listen(port, ()=>console.log(`express app ${port}!`));
