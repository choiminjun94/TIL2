const express = require('express')
const app = express()
const port = 5000
const bodyParser = require("body-parser")
const{User} = require('./Model/Uesr');
const config = require("./Config/key")
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const mongoose = require('mongoose')

mongoose.connect(config.mongoURI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
    //mongoDB driver 자체에서 원래 되던것들을  안되게 만든건데요(deprecation)
    //버전업그레이드 같은걸 할떄 필요없는 부분을 없애거나 다른걸로 대체 할때 이렇게 되는데  그렇게 되면  
    //mongoose 를 사용하는 유저들이  에러가 나거나 warning 문구들을  로그에서 보게 돼요.
}).then(()=>console.log('접속되었습니다.')).catch(err=>console.log(err))

//회원 가입 라우트 
app.post("/register", (req,res)=>{
    const user = new User(req.body)

    user.save((err,userInfo)=>{
        if(err) return res.json({success: false, err})
        return res.status(200).json({
            success: true
        })
    })
})

app.listen(port, ()=>console.log(`express app ${port}`))
