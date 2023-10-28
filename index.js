const http = require('http');
var fs = require("fs");

const server = http.createServer((req, res) => { res.writeHead (200, {"Content-Type": "text/plain"});
  res.end(fs.readFileSync('input.txt'));
});
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log("Server is running on port 3000"));

// Defining new user 
var data = fs.readFileSync('input.txt');
var val = parseInt(data) + 1;
fs.writeFileSync('input.txt', val.toString());
