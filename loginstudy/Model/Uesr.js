const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type: String,
        maxlength: 50
    },
    email:{
        type: String,
        trim: true, // 공백 없애주는 역할
        unique: 1 // 똑같은 email을 한번만 쓰게 해주는 역할
    },
    password:{
        type: String,
        maxlength:50
    },
    role:{
        type:Number,
        default: 0 
        // 관리자나 일반인 인것을 구별하는 역할
    },

    image: String,

    token:{
        type:String,
    },
    //유효성 관리
    tokenExp:{
        type:Number
    }
    //토큰 유효기간
})

const User = mongoose.model('User', userSchema)

module.exports = {User}
// 다른곳에서도 사용하게 export
