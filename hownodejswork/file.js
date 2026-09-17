const fs = require("fs");
const os = require('os');
console.log(os.cpus().length);
// console.log("1");
// // bhai  ye ek non blocking request hnn toh ye pura porcess krke aaygyi
// // fs.readFileSync("contact.txt", "utf-8", (err, result) => {
// //     console.log(result);
// // })
// const result = fs.readFileSync("contact.txt", "utf-8");
// console.log(result);
// console.log("2");
