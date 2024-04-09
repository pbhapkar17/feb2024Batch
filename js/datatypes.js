// js 1.primitive data type
//2.non-premitive data type
//String.
// Number.
// Bigint.
// Boolean.
// Undefined.
// Null.
// Symbol.
// Object.
// Primitive data types store a single value and occupy a single memory space, whereas Non-primitive data types can store multiple values and hence, occupy multiple memory spaces
// Primitive data structures are simple and predefined types like integers and booleans, used for basic data storage, whereas non-primitive structures like arrays and lists are more complex, designed for organizing collections of data and enabling advanced data manipulation


//string: used for alphabetics/alphanumric values 
let surname = "Patil";
let surname1 = '233Pa333til33312133';

console.log("surname",surname);

//typeof() : operator is used to get type of data.

console.log("data type of sr1", typeof(surname1));

//number : when wats to store num data

let marks = 70;
console.log(marks)
console.log('dt of marks',typeof(marks));

let amt = 9999999999999999n;
let amount = BigInt(amt);
console.log(amount);
console.log(typeof(amount));
//2.056//2.1

let a = 10.333;
console.log(typeof(a));

//null : data type of null: object
let b = null;
console.log(b);
console.log(typeof(b));

//undefined 
let d ;
console.log(d);
console.log(typeof(d));

//boolean : true/false
let isBottleEmpty = true;
console.log(isBottleEmpty);
console.log(typeof(isBottleEmpty));