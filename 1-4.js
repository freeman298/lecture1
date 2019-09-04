//http 라이브러리를 활용하여 request를 하는 방법
var app = require('http');

var route = app.createServer();

route.listen(8080,()=>{
//route.listen(3000,()=>{
    console.log("3000포트에서 웹서버가 시작되었습니다.");
})

route.on('connection',(socket)=>{
    var addr =socket.address()
    console.log("웹 클라이언트에 접속하였습니다 %s : %d", addr.address, addr.port);
    console.log(addr);
})

route.on('request',(request, response)=>{
    console.log("웹 클라이언트에서 요청이 왔습니다");
    console.log(request);
})