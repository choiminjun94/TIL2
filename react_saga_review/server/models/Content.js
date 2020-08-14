const mongoose = require('mongoose');

const contentSchema = mongoose.Schema({
    content:{
        type: String,
        maxlength: 300
    }
})

const Content = mongoose.model('Content', contentSchema)

module.exports ={Content}

js -> 이벤트 핸들러 -> 문서 구조 