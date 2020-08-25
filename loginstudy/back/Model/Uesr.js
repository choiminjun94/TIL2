const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;
//saltRounds가 몇자리인지 설정
//salt을 이용해 암호화 한다.

const userSchema = mongoose.Schema({
  id: {
    type: String,
    maxlength: 10,
    trim: true,
    match:[/^.{4,12}$/,'Should be 4-12 characters!'],
    // match:[/^[{4,12}]+\.[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]$/,'Should be a vaild email address!'],
  },
  email: {
    type: String,
    trim: true, // 공백 없애주는 역할
    unique: 1, // 똑같은 email을 한번만 쓰게 해주는 역할
    match:[/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,'Should be a vaild email address!'],
  },
  password: {
    type: String, 
    maxlength: 50,
  },

  role: {
    type: Number,
    default: 0,
    // 관리자나 일반인 인것을 구별하는 역할
  },

  image: String,

  token: {
    type: String,
  },
  //유효성 관리
  tokenExp: {
    type: Number,
  },
  //토큰 유효기간
});


// 유저 모델에 정보를 저장하기 전에 작업
//index.js file의  user.save((err,userInfo)=>{ 전에 작업이 된다는 말이다.
userSchema.pre("save", function (next) {
  let user = this;
  //이렇게하면 바로 스키마를 가리치게 된다. - 기본 비밀번호를 가져오기 위한 작업
  

  if (user.isModified("password")) {
    // 비번이 변경 될때만 암호화 한다. 
    //비번을 암호화 시키니다.
    bcrypt.genSalt(saltRounds, function (err, salt) {
      if (err) return next(err);
      //err가 발생하면 바로 index파일의 err부분으로 이동
      bcrypt.hash(user.password, salt, function (err, hash) {
        // function 뒤의 hash는 암호화된 비밀번호 이다.
        if (err) return next(err);
        user.password = hash;
        //작업이 성공 했다면 기본 비밀번호를 hash비번으로 교체
        //작업이 끝난 후에 next()로 index파일에 정보를 전달
        next();
      });
    });
  }else{
    next();
  }
  //비번이 아니라 다른것을 바꿀때
  //이게 없으면 위에서 머문다.
});

userSchema.methods.comparePassword = function(plainPassword, cb){
  // plainPassword 암호화된 비번 찾은지 찾기
  bcrypt.compare(plainPassword, this.password, function(err, isMatch){
    if(err) return cb(err),
     cb(null, isMatch)
  })

}

const User = mongoose.model("User", userSchema);


module.exports = { User };
// 다른곳에서도 사용하게 export
