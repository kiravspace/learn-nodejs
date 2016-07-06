var request = require('request');
var querystring = require('querystring');

var command = process.argv[2];

var url = 'http://localhost:3000';

function handleBadStatus(statusCode){
  if(statusCode != 200){
    throw new Error(statusCode);
  }
}

if(command == 'POST'){
  var item = querystring.escape(process.argv[3]);
  request.post(url, item, function(err, res, body){
    handleBadStatus(res.statusCode);
    console.log(body);
  });
}
else if(command == 'GET'){
  request.get(url, function(err, res, body){
    handleBadStatus(res.statusCode);
    console.log(body);
  });
}
