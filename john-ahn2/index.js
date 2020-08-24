const express = require("express");
const app = express();
const port = 5000;
const bodyParser = require("body-parser")
const {User} = require("./models/User");

const config = require("./config/key")
app.use(bodyParser.urlencoded({extended: true}))
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
  )
  .then(() => console.log("connect"))
  .catch((err) => console.log(err));
  
app.get("/", (req, res) => res.send("안녕"));
app.post("/register", (req, res)=>{

    const user = new User(req.body)

    //save 전에 암호화 해야한다. - user.js로 이동
    user.save((err, userInfo) => {
        if(err) return res.json({success: false, err})
        return res.status(200).json({
            success: true
        })
    })
})
app.post('./login', (req, res)=>{
  //요청된 이메일을 db에서 찾는다.
    User.findOneAndDelete({email : req.boby.email}, (err,user)=>{
      //emaill이 존재하지 않을시
        if(!user){
          return res.json({
            loginSuccess:false,
            message: "제공된 이메일에 해당하는 유저가 없습니다."
          })
        }
        //용청된 이메일이 데이터에 있다면 비밀번호가 맞는 비번인지 확인
        user.comparPassword(req.body.password, (err, isMatch) => {
          if(!isMatch)
          return res.json({loginSuccess: false, message:"비밀번호가 틀림"})

            //비번까지 맞다면 토큰을 생성하기
            user.generateToken((err,user)=>{

            })
        })
    })
})
app.listen(port, () => console.log(`express app ${port}!`));
