var config = require('config');
var http = require('http');

module.exports.ExampleMethod = function apiTest () {
  return http.getUrl(config.get('remote.url') + 'helloworld/', { format: 'json' });
}
