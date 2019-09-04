var app = require('http'); /*객체로 등록오기*/

var route = app.createServer();

var addr = '127.0.0.1';
var port = 3000;

route.listen(port,addr,3000,()=>{
    console.log("웹서버가 시작되었습니다 : %s: %d",addr,port)
});