const fs = require("fs");   // bhai esme ye fs use hota file ko handle krna ka lai use hota hai bhai 


// sync ka mtlb this was the synchrois call

// fs.writeFileSync("./test.txt", "Hey There");

// fs.writeFile("./test.txt", "hello world", (err) => {

// });

// const result = fs.readFileSync("./contact.txt", "utf-8");

// console.log(result);

// fs.readFile("./contact.txt", "utf-8", (err, result) => {
//     if (err) {
//         console.log("Error", err);
//     } else {
//         console.log(result);
//     }
// });


fs.appendFileSync("./test.txt", `${Date.now()}Hey There\n`);