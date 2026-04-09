// =======================
// VAR example
// =======================

// var function scope follow karta hai, block scope nahi

if (true) {
    var x = 10;   // yeh variable block ke andar bana hai
}

console.log("var x:", x); 
// yeh bahar bhi access ho raha hai (yeh hi problem hai var ki)


// =======================
// LET example
// =======================

// let block scope follow karta hai

if (true) {
    let y = 20;   // yeh sirf block ke andar valid hai
    console.log("let y inside block:", y); 
}

// console.log(y);  
// error aayega kyunki y block ke bahar accessible nahi hai


// =======================
// CONST example
// =======================

// const ka use tab karte hain jab value change nahi karni ho

const z = 30;
console.log("const z:", z);

// z = 40;  
// error aayega kyunki const ki value change nahi kar sakte


// =======================
// Extra difference (important)
// =======================

// var re-declare ho sakta hai
var a = 5;
var a = 15;   // allowed (problem create kar sakta hai)
console.log("var a:", a);


// let re-declare nahi hota
let b = 10;
// let b = 20;   // error


// const ko declare karte hi value deni padti hai
// const c;  // error


// =======================
// Simple summary 
// =======================

// var -> old hai, ise bht kam use kiya jata h  (scope issue) debugging me bht problm hoti h
// let -> normal variable (best for most cases) blocked scope
// const -> fixed value (safe and preferred) value update nhi kr skte h