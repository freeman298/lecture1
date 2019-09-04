var app = require('http');
var fs = require('fs'); //파일시스템 접근

var route = app.createServer();
var port = 8080;


route.listen(port,()=>{
    console.log("서버가 시작됨(http://localhost:3000)");
})

//route.on('connection');

route.on('connection' ,(socket)=>{
    var addr = socket.address();
    console.log("웹 클라이언트에 접속 %s:3000", addr.address);
 })

route.on('request',(req,res)=>{
    console.log("요청이 정상적으로 이루어졌습니다!");
    var filename= "images.jpg";
    var infile = fs.createReadStream(filename, {flags:'r'});
    infile.pipe(res);
})