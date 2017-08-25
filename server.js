var http = require('http'),
    fs = require('fs'),
    url = require('url'),
    port = 8080;

/* Global variables */
var listingData, server;

var requestHandler = function(request, response) {
  var parsedUrl = url.parse(request.url);


 if(parsedUrl.path === '/listings'){
    response.end(JSON.stringify(listingData));
  }
  else{
    response.writeHead(404, {"Content-Type": "text/html"});
    response.write('Bad gateway error');
    //response.statusMessage = 'Bad gateway error';
    response.end();
  }






  /*if(parsedUrl.path == '/listings'){
    res.end(listingData);
  }*/
  //console.log(parsedUrl);
  //console.log(parsedUrl.host);
  //console.log(parsedUrl.path);

  /*
    Your request handler should send listingData in the JSON format if a GET request
    is sent to the '/listings' path. Otherwise, it should send a 404 error.

    HINT: explore the request object and its properties
    http://stackoverflow.com/questions/17251553/nodejs-request-object-documentation
   */
};

fs.readFile('listings.json', 'utf8', function(err, data) {

  listingData = JSON.parse(data);

  //console.log(listingData);
  var server = http.createServer(requestHandler);

// the server is now started, listening for requests on port 8080
server.listen(port, function() {
  //once the server is listening, this callback function is executed
  console.log('Server listening on: http://127.0.0.1:' + port);
});
console.log('Is the server started?');
  /*
    This callback function should save the data in the listingData variable,
    then start the server.
   */
});
