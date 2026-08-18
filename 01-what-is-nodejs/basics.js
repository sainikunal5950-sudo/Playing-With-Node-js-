console.log("CHUTIYA HAI TU BHAI ");


// node js hme kuch specific eneviornment deta hai  jais eki  current folder ka path 

console.log("Current directory:", __dirname);

console.log("Current file:", __filename);


const os = require("os");

console.log("operating system ", os.platform());
console.log("CPU architecture ", os.arch());
console.log("Number of cpus", os.cpus().length);
