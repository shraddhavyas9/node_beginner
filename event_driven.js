var http = require("http");

function onRequest(request, response){
    console.log("Request received");
    response.writeHead(200, {"Content-Type" : "text/plain"});
    response.write("hello world");
    response.end();

}
http.createServer(onRequest).listen(8881);

console.log("server has started");
