const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const cookieParser = require('cookie-parser') 
const{User} = require('./Model/Uesr');
const config = require("./Config/key")
const {auth} = require('./middleware/auth')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cookieParser());

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

//cliend 테스트 용도
app.get('/api/hello', (req,res) => res.send('hello world'))

//회원 가입 라우트 
app.post("/api/user/register", (req,res)=>{
    
    //회원 가입 할때 필요한 정보들을 client에서 가져오면
    //그것들을 데이터 베이스에 넣어준다.
    
    const user = new User(req.body)
     
    user.save((err,userInfo)=>{
        if(err) return res.json({success: false, err})
        return res.status(200).json({
            success: true
        })
    })
})

//로그인 route 만들기
app.post('/api/user/login', (req,res)=>{

    // 요청된 이메일이 db에 있는지 화인
    User.findOne({email: req.body.email}, (err,user)=>{
        if(!user){
            return res.json({
                loginSuccess: false,
                message: "해당되는 유저가 없습니다."
            })
        }
        // 요청된 이메일이 있다면 맞는지 확인
        user.comparePassword(req.body.password, (err, isMatch)=>{
            if(!isMatch)
            return res.json({loginSuccess: false, message:"비번이 틀렸습니다."})

                // 비밀번호까지 맞다면 토큰을 생성하기
                user.generateToken((err, user)=>{
                    if(err) return res.status(400).send(err)

                    //토큰을 저장한다. 어디에 ?? -> 쿠키, 로컬스토리지(각지 장단점이 있다.)
                    //쿠키에 저장
                    res.cookie("x_auth", user.token )
                    .status(200)
                    .json({loginSuccess: true, userId: user._id})
                })
        })  
    })
})

app.get('/api/users/auth',auth, (req,res)=>{
    //여기까지 미들웨어를 통과해 왔다는 애기는 Authentication이 true 라는 말
    res.status(200).json({
        _id:req.user._id,
        isAdmin: req.user.role === 0 ? false: true,
        isAuth: true, 
        email: req.user.email,
        id: req.user.id,
        role: req.user.role,
        image: req.user.image
    })
})
//auth - 미들웨어

//로그아웃 라우트
app.get('/api/users/logout', auth, (req, res) => {
    User.findOneAndUpdate({_id:req.user._id}, 
        //_id:req.user._id는 auth 미들웨어에서 가져와서 찾는다.
    {token: ""},//    토큰을 삭제 해준다.
    (err, user)=>{
        if(err) return res.json({success: false, err});
        return res.status(200).send({
            success: true
        })
    })
})
const port = 5000
app.listen(port, ()=>console.log(`express app ${port}`))

