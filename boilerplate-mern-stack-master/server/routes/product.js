const express = require('express');
const router = express.Router();
const multer = require('multer')
const {Product} =require('../models/Product')

//=================================
//             Product
//=================================
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, `${Date.now()}_${file.originalname}`)
      // 먼저 현재 날짜 | file이름
    }
  })
   
  var upload = multer({ storage: storage }).single("file")

  router.post('/image', (req,res) => {
    //가져온 이미지를 저장해 준다. 그러기 위해서 multer라른 라이브러리가 필요
    upload(req,res, err =>{
        if(err){
            return req.json({success: false, err})
        } 
        return res.json({success: true, filePath:res.req.file.path, filename: res.req.file.filename})
    })
})

router.post('/', (req,res) => {
    //받아온 정보들을 DB에 넣어 준다.
    const product = new Product(req.body)
    product.save((err) =>{
      if(err) return res.status(400).json({success: false, err})
      return res.status(200).json({success :true})
    })
  })

  router.post('/products', (req,res) => {
    //product에 들어 있는 모든 상품 정보를 가져온다.
    Product.find()
    .populate("write")
    .exec((err, productInfo) =>{
      if(err) return res.status(400).json({success: false, err})
      return res.status(200).json({success :true, productInfo})
    })
  })




module.exports = router;
