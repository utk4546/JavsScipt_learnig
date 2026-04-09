
// Primitive Data Types in JavaScript(jo javaScipt hum provide krti h )


// 1. Number -> integer ya decimal dono store karta hai
let age = 21; 
let price = 99.99;
console.log("Number:", age, price);

// 2. String -> text ya characters store karta hai
let name = "Utkarsh";
let message = 'Hello World';
console.log("String:", name, message);

// 3. Boolean -> sirf true ya false (mostly conditions me use hota hai)
let isLoggedIn = true;
let isAdmin = false;
console.log("Boolean:", isLoggedIn, isAdmin);

// 4. Undefined -> variable bana hai but value assign nahi hui
let data;
console.log("Undefined:", data);

// 5. Null -> intentionally empty value (developer khud set karta hai)
let selectedUser = null;
console.log("Null:", selectedUser);

// 6. BigInt -> bahut bade numbers ke liye (normal number se bada)
let bigNumber = 123456789012345678901234567890n;
console.log("BigInt:", bigNumber);

// 7. Symbol -> unique value create karta hai (mostly advanced use me)
let id1 = Symbol("id");
let id2 = Symbol("id");
console.log("Symbol:", id1 === id2); // false (kyunki har symbol unique hota hai)


// ===============================
// Extra: typeof check (important)
// ===============================

console.log(typeof age);        // number
console.log(typeof name);       // string
console.log(typeof isLoggedIn); // boolean
console.log(typeof data);       // undefined
console.log(typeof selectedUser); // object (JS ka known bug )
console.log(typeof bigNumber);  // bigint
console.log(typeof id1);        // symbol