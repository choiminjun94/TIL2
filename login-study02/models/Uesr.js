const mongoose = require("mongoose");

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

const User = mongoose.model('User',userSchema)
// 먼저 모델의 이름 || 나중엔 모델 스키마 작성
// 스카마를 모델로 감싸준다

module.exports = {User}
// 다른 곳에서도 쓸수 있게 export를 해준다