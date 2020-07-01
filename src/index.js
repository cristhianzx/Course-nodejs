var http = require("http");
var url = require("url");
var querystring = require("querystring");
var { info, error } = require("./module/my-log"); // exporta solo la funcion info
//var log = require("./module/my-log"); // esportar un modulo de forma global
var consts = require('./utils/consts');
var firebase = require("../libs/firebase");
var { countries } = require("countries-list");


var server = http.createServer(function(request, response) {
    var parsed = url.parse(request.url);
    console.log("parsed:", parsed);
    /*
        response.writeHead(200, { "content-type": "application/json" });
        response.write(JSON.stringify(countries.CO));
        response.end();
    */
    var pathname = parsed.pathname;
    var query = querystring.parse(parsed.query);
    console.log("query", query);

    if (pathname === '/') {
        response.writeHead(200, { "content-type": "text / html " });
        response.write('<html><body><p>HELLO HOME</p></body></html>');
        response.end();
    } else if (pathname === "/exit") {
        response.writeHead(200, { "content-type": "text / html " });
        response.write('<html><body><p>BYE</p></body></html>');
        response.end();
    } else if (pathname === "countries") {
        response.writeHead(200, { "content-type": "application/json  " });
        response.write(JSON.stringify(countries.CO));
        response.end();
    } else if (pathname === '/info') {
        var result = info(pathname);
        //var result = log.info(request.url);
        response.writeHead(200, { "content-type": "text / html " });
        response.write(result);
        response.end();
    } else if (pathname === '/error') {
        var result = error(request.url); //llama el la funcion error que fue exportada de forma globbal
        // var result = log.error(request.url); // llama el modulo log en el cual esta la funcion error con la variables de request del servidor
        response.writeHead(200, { "content-type": "text / html " });
        response.write(result);
        response.end();
    } else {
        response.writeHead(404, { "content-type": "text / html " });
        response.write('<html><body><p>NOT FOUND</p></body></html>');
        response.end();
    }
});

server.listen(4000); // le deciamos al servidor que se ejecute en puerto 4000
console.log("running on 4000");