var http = require('http');
var qs = require('querystring');

var server = http.createServer(function(request, response){
    console.log('server request made');  
    if(request.method=='OPTIONS'){        
        response.writeHead(200, 
            {'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,OPTIONS',
            'Access-Control-Allow-Headers':'header1,header2',
            'Content-Type': 'text/html'
            }
        );
        response.end("\n");
        return console.log('preflight');
    }else if(request.method=='POST') {
        console.log('post');
        response.writeHead(200, {'Content-Type': 'text/html','Access-Control-Allow-Origin':'*'});        
        response.write('POST');
        response.end('\n');
    }else if(request.method=='GET') {        
        console.log('GET');  
        response.writeHead(200, {'Content-Type': 'text/html','Access-Control-Allow-Origin':'*'});
        response.write('GET');
        response.end('\n');                 
    }else if(request.method=='PUT'){
        console.log('PUT');  
        response.writeHead(200, {'Content-Type': 'text/html','Access-Control-Allow-Origin':'*'});
        response.write('PUT');
        response.end('\n');    
    }else if(request.method=='DELETE'){
        console.log('DELETE');  
        response.writeHead(200, {'Content-Type': 'text/html','Access-Control-Allow-Origin':'*'});
        response.write('DELETE');
        response.end('\n');    
    }else{
        console.log('something unexpected happened and it is daves fault');
    } 
});

server.listen(8000);

console.log('Server listening on port 8000');

/*
curl -X PUT <url>



// moved from post
        response.writeHead(200, {'Content-Type': 'text/html'});
            var body='';
            request.on('data', function (data) {

            });
            request.on('end',function(){
                var POST =  qs.parse(body);
                console.log(POST);  
            });
// done


    if(request.method=='OPTIONS'){        
        response.writeHead(200, 
            {'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            'Access-Control-Allow-Headers':'header1,header2',
            'Content-Type': 'text/html'
            }
        );
        response.end("\n");
        return console.log('preflight');
    }

    // handle the silly favicon request for Chrome
    /*
    if(request.url === '/favicon.ico') {
        console.log('favicon');
        response.writeHead(200, {'Content-Type': 'image/x-icon','access-control-allow-orgin':'*'} );
        response.end();        
        return;
    } 
    */

    // the method is POST -- For REST this means create a resource

