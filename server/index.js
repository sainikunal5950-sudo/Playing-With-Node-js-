// const http = require("http");

// const myserver = http.createServer((req, res) => {
//     console.log(req);
//     res.end("Hello From Server");
// })

// myserver.listen(8000, () => {
//     console.log("Server Started!");
// })

// ye upr vale code nrml server crete hoo rha hai hn abb assignment ka tor pe krge ek kam bhai


// const http = require("http");
// const fs = require("fs");
// const myserver = http.createServer((req, res) => {
//     const log = `${Date.now()}:${req.url} New Req Received \n`;
//     fs.appendFile("log.txt", log, (err, data) => {
//         switch (req.url) {
//             case "/":
//         }
//         // res.end("Hello from server again");
//     });
// })

// myserver.listen(8000, () => {
//     console.log("Server Started!");
// })



// why do we neee exppress

// const http = require("http");

// const server = http.createServer((req, res) => {
//     if (req.url === '/users' && req.method === "GET") {
//         // users logic
//     }
//     if (req.url === '/login' && req.method === "GET") {
//         // login logic bhai edr
//     }
// })


// bhai upr node js hmm api crete krr rha hai ajsie aur bhi aaygyai toh code messy aur difficult hojaygya thats why expreess come


// const express = require("express");

// const app = express();

// app.get("/", (req, res) => {
//     res.send("hello bhai servoer chl pda hai ");
// })


// app.listen(5000, () => {
//     console.log("server running on port 50000");
// })


// ab bat krte hai eska version ki bhai jasie ki

// 4.18.2

// ye hai bhai toh esma bhai jasie ki

// last vala part hota hai minor fixes ka liye .2
// middle hota hai bhai jasie ki .18 big recommede3d ebig bug fix
// first vala hota hai new .4 se .5 hogya tooh new apllication pe code chalega jo koi existing apllication uspe code nhi chaleaga bhai 