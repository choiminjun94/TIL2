const express = require("express");
const app = express();
const port = 7000;
const config = require("./config/key")
const bodyParser = require('body-parser')
const{UserTest} =require('./models/UesrTest') 

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const mongoose = require("mongoose");
mongoose
  .connect(
    config.mongoURI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  ).then((()=>console.log('mongoDb 연결 성공  '))).catch(err =>console.log(err))

// app.get("/", (req, res) => res.send("Hello World"));

//회원 가입

app.post('/register', (req,res)=>{
  //회원 가입 할때 필요한 정보들을 client에서 가져오면 
  //그것들을 DB에 보내준다.

  const user = new UserTest(req.body)

  user.save((err,userInfo)=>{
    if(err) return res.json({success: false, err})
    return res.status(200).json({
      success: true
    })
  })
  //save는 mongodbd에서 오는 메서드
  //status(200)는 성공 했다는 뜻


})

app.listen(port, () => console.log(`listen port ${port}`));
