// yha ek function crete krlia maine jaise ki 
// maine ye file maine socha yha mai sara kam maths se related kruga aur ess function ko run helo.js mai run kruga bhai 
function add(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}


// module.exports = "kunal";
// module.exports = add;
// module.exports=sub;

// bhai abb esse overwrite hoga ye bhai 
// toh hm ek kam krte hai bhai esko object ki trah use krte hai 
module.exports = {
    add,
    sub,
}
// abb overlap nhi hoga ye 