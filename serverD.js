var http = require('http');
var qs = require('querystring');
var fs = require('fs');
var storeChats = __dirname + '/chats.txt';

var server = http.createServer(function(request, response){
    console.log('server request made');
    // handle the silly favicon request for Chrome
    if(request.url === '/favicon.ico') {
        response.writeHead(200, {'Content-Type': 'image/x-icon'} );
        response.end();
        console.log('favicon requested');
        return;
      }

    /* Grab the querystring from the url*/
    var str = request.url.split('?')[1];

    // result is an object with properties that correspond to the names in the name/value pairs
    // example: firstname=dave   will be result.firstname
    var result = qs.parse(str);

    // grab the value for firstname and store it
    var firstname = result.firstname;

    // grab the value of message and store it
    var message = result.message;

    // grab the value of action and use it to either read or write to chats
    var action = result.action;

    // gonna write the latest chat to chats.txt in the local director
    if(action=='write'){
        console.log('write');
        var newChat = firstname + ": " + message + "<br>\n";
        fs.appendFile(storeChats, newChat, function(err){

            if(err){
                console.log(err);
            }else{
                console.log('Data appended!');
            }
        });
    // gonna read the chats out of the log and send them back to the client
    }else if(action=='read'){
        console.log('read');
        fs.readFile(storeChats, 'utf8', function(err, data){
            if(err){
                console.log(err);
            }else{
                console.log('Chats read!');
                // send the chats back as the repsonse
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.write(chatData);
                response.end('\n');
            }
        });
    }else{
        console.log('something unexpected happened and it is martins fault');
    }
});

server.listen(8000);

console.log('Server listening on port 8000');
