var https = require('https');

function getAndPrintHTML () {
  var dataBuffer = '';
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function (response) {
    response.setEncoding('utf8');
    response.on('data', function (data) {
      dataBuffer += data;
    });
    response.on('end', function() {
      console.log(dataBuffer);
      console.log('Response stream complete.');
    });
  });
}

getAndPrintHTML();