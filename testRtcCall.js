var http = require('http');

//host: 'localhost',
//port: 3000,
var options = {
  host: 'soytap.azurewebsites.net',
  path: '/api',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'type':'RTC'
  }
};

var request = http.request(options, function(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    console.log('BODY: ' + chunk);
  });
})
request.write(JSON.stringify({user:'Jerome The Russ', card: ['123456','456123'], openTab:true, toast: true}));
request.end();
