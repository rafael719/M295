const http = require('http');

const urls = process.argv.slice(2);
const results = [];
let count = 0;

function printResults() {
  results.forEach(function(result) {
    console.log(result);
  });
}

function httpGet(index) {
  http.get(urls[index], function(response) {
    let data = '';
    
    response.setEncoding('utf8');
    response.on('data', function(chunk) {
      data += chunk;
    });
    
    response.on('end', function() {
      results[index] = data;
      count++;
      
      if (count === 3) {
        printResults();
      }
    });
  });
}

for (let i = 0; i < 3; i++) {
  httpGet(i);
}
