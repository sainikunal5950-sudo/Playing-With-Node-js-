// const http = require("http");

// const myserver = http.createServer((req, res) => {
//     console.log(req);
//     res.end("Hello From Server");
// })

// myserver.listen(8000, () => {
//     console.log("Server Started!");
// })

// ye upr vale code nrml server crete hoo rha hai hn abb assignment ka tor pe krge ek kam bhai 


const http = require("http");
const fs = require("fs");
const myserver = http.createServer((req, res) => {
    const log = `${Date.now()}:${req.url} New Req Received \n`;
    fs.appendFile("log.txt", log, (err, data) => {
        switch (req.url) {
            case "/":
        }
        // res.end("Hello from server again");
    });
})

myserver.listen(8000, () => {
    console.log("Server Started!");
})
