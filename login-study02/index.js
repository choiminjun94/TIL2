const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://test_username:0000@cluster0-amulf.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
).then((()=>console.log('mongoDb 연결 성공  '))).catch(err =>console.log(err))

app.get("/", (req, res) => res.send("Hello World"));
app.listen(port, () => console.log(`listen port ${port}`));
