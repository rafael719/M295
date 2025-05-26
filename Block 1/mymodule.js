const fs = require('fs');
const path = require('path');

module.exports = function(dirPath, extension, callback) {
  fs.readdir(dirPath, function(err, list) {
    if (err) {
      return callback(err);
    }
    
    const filtered = list.filter(function(file) {
      return path.extname(file) === '.' + extension;
    });
    
    callback(null, filtered);
  });
};
