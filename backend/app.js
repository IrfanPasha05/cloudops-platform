const http = require('http');
const os = require('os');

const server = http.createServer((req,res)=>{
  if(req.url === "/status"){
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({
      project: "CloudOps Platform",
      status: "Running",
      instance: os.hostname(),
      time: new Date()
    }));
  } else {
    res.writeHead(200);
    res.end("CloudOps Backend Running 🚀");
  }
});

server.listen(3000);
console.log("Server running on port 3000");
