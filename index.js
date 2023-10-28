var fs = require("fs");
// Defining new user 
var data = fs.readFileSync('input.txt');
fs.writeFileSync('input.txt', 'Hi');