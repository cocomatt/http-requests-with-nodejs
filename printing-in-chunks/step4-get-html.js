var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

function printHTML (html) {
  console.log(html);
}

function getHTML (options, callback) {
  var dataBuffer = '';
  https.get(options, function (response) {
    response.setEncoding('utf8');
    response.on('data', function (data) {
      dataBuffer += data;
    });
    response.on('end', function() {
      printHTML(dataBuffer);
      console.log('Response stream complete.');
    });
  });
}

getHTML(requestOptions, printHTML);

