var http = require('http'); /*객체로 등록오기*/

var server = http.createServer();

var port = 3000;

server.listen(port,function(){
    console.log("Server is started : %s" + port)
})