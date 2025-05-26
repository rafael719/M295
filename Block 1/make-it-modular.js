const mymodule = require('./mymodule.js');

const dirPath = process.argv[2];
const extension = process.argv[3];

mymodule(dirPath, extension, function(err, files) {
  if (err) {
    return console.error(err);
  }
  
  files.forEach(function(file) {
    console.log(file);
  });
});
