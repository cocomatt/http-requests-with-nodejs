var https = require('https');

module.exports = function getHTML (options, callback) {
  var dataBuffer = '';
  https.get(options, function (response) {
    response.setEncoding('utf8');
    response.on('data', function (data) {
      dataBuffer += data;
    });
    response.on('end', function() {
      callback(dataBuffer);
      console.log('Response stream complete.');
    });
  });
};