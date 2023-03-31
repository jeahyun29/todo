var express = require("express");// 설치된 모듈을 불러와서 express 변수에 담는다
var app = express();
var port = process.env.PORT || 3000; 
//process.env는 nodeJS에서 환경 변수를 가져올 때 사용.
//환경 변수가 입력되지 않을 시 port에 3000번을 지정

app.set('view engine','ejs');

app.get("/",function(req,res){
    //res.send("hello");
    res.render("list");
});

app.listen(port,function(){ //express 서버를 실행할 때 필요한 포트 정의 및 실행 시 callback 함수
    console.log(`server is listening at localhost:${port}`);
});
