//fs-sync : sử dụng thư viện readFileSync, writeFileSync.
var fs = require('fs');

console.log("START");

try {
  var content = fs.readFileSync("./myfile.txt", 'utf8');
  console.log('Content: ' + content);
} catch (error) {
  console.log('Error: ' + error);
}

try {
  fs.writeFileSync("./myfile.txt", 'New content');
  console.log('File written successfully.');
} catch (error) {
  console.log('Error: ' + error);
}

console.log("END");