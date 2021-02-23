function start(response){
    console.log("request handler 'start' was called");

    var body = '<html>' +
    '<head>' +
    '<meta http-equiv="Content-Type" content="text/html;'+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<forn action="/upload" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="submit text"/>'+
    '</form>'+
    '</body>'+
    '</html>';

    response.writeHead(200, {"Content-Type" : "text/html"});
    response.write(body);
    response.end();


}

function upload(response){
    console.log("request handler 'upload' was called");
    response.writeHead(200, {"Content-Type" : "text/plain"});
    response.write("hello upload");
    response.end();
}

exports.start = start;
exports.upload = upload;
