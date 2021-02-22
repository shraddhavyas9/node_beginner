var http = require("http");

function start(){
    function onRequest(request, response)
    {
        console.log("request received");
        response.writeHead(200, {"Content-Type":"text/plain"});
        response.write("hello world");
        response.end();
    }

    http.createServer(onRequest).listen(8002);
    console.log("server has started");

}

exports.start = start;