// 스마카 작성
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const salRounds = 10;

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true, // 스페이스를 없애주는 역할
    unique: 1, // 똑같은 email이 한번만 쓰이게 해주는 역할
  },
  password: {
    type: String,
    minlength: 5,
  },
  lastname: {
    type: String,
    maxlength: 50,
  },
  role: {
    type: Number,
    default: 0,
  }, // 관리자나 일반인 인것을 구별하는 역할

  image: String,

  token: {
    type: String,
  },
  // 유효성 관리

  tokenExp: {
    type: Number,
  },
  //토큰 유효기간
});

userSchema.pre("save", function (next) {
  //몽구스가에서 가져온 메소드
  // 저장하기 전에 무엇을 한다음에 끝나면 다시 회원가입 쪽으로 넘어가서 작업을 지속

  var user = this; // 위에 스키마를 가리킨다.

  if (user.isModified("password")) {
    //비번이 변경될 때만 비번화

    //비번 암호화 시킨다.
    bcrypt.genSalt(salRounds, function (err, salt) {
      //sal을 만들때 salRound가 필요하다. // 뒤에 function을 콜백 함수이다.

      if (err) return next(err);
      // 에러가 발생하면 next을 이용해 회원가입 파트의 err로 정보를 넘겨준다.

      bcrypt.hash(user.password, salt, function (err, hash) {
        //hash의 첫번쨰는 내가 넘길려는 순수한 비번이다. 즉 schema의 비번 이것을 하기 위해서는 46번의 var user = this가 필요하다.
        //hash가 암호화된 비번이다.
        if (err) return next(err);

        user.password = hash;
        next();
        console.log("hash 성공");
      });
    });
  } else {
    next();
  }
});

userSchema.methods.comparePassWord = function(plainPassword, cb){
    bcrypt.compare(plainPassword, this.password, function(err,isMatch){
        if(err) return cb(err),
        cb(null, isMatch) //true
    })
}

const User = mongoose.model("Uesr", userSchema); // 먼저 모델의 이름 || 나중엔 모델 스키마 작성
// 스카마를 모델로 감싸준다

module.exports = { User }; // 다른 곳에서도 쓸수 있게 export를 해준다
