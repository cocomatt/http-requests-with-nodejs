var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step1.html'
};

function getAndPrintHTML (options) {
  var dataBuffer = '';
  https.get(options, function (response) {
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

getAndPrintHTML(requestOptions);