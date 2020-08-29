const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

// 서버 응답 출력
app.get('/', (req, res) => {
    res.send(`Response Complate`);
})

//서버 실행
app.listen(PORT, () => {
    console.log(`Server On : http://localhost:${PORT}/`);
  })