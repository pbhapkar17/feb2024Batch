//assigment operator : to assiging the value

let a = 10;

//+ addition/concatination

let b = 10;
// b = b + 1;
// console.log('b',b);
// let c = b + 1;
// console.log('c',c);


console.log(b++);  //it will return value first and then do incr.
console.log(b);

let c = 13
console.log(++c);  //it will  do incr, return  value 
console.log(c)

let d = 15;
let e = 60;

// d = d+e;
d += e
console.log(d);

//= assigment opr: used to assign value;
//== equality operator : it will check for the value only not dt.
//=== equality  operator : data type as well as value

let s = 20;
let h = "20";
console.log( s == h );
console.log( s === h );

//!=	not equal value 
//!==	not equal value or not equal type

let s1 = 20;
let h1 = 30;
console.log( s1 != h1 ); //T
console.log( s1 !== h1 ); //T

//> :greater than
console.log(s1 > h1); // 20 > 30 :F

//< :Less than
console.log(s1 < h1); // 20 < 30 :T

//>= greater than or equal to
console.log(s1 >= h1); //20 > 30 :F

//<=	less than or equal to 
//=> arrow opertaor

//? ternory operator
let x = 10; 
//10>10 :F
//condition ? T : F
x > 10 ? console.log("x is greater than 10") : console.log("x is less than 10");