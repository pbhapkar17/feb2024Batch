// js 1.primitive data type
//2.non-premitive data type

//1.primitive data type
// String.
// Number.
// Bigint.
// Boolean.
// Undefined.
// Null.

//2.non-premitive data type
// Symbol.
// Object.
// Primitive data types store a single value and occupy a single memory space, whereas Non-primitive data types can store multiple values and hence, occupy multiple memory spaces
// Primitive data structures are simple and predefined types like integers and booleans, used for basic data storage, whereas non-primitive structures like arrays and lists are more complex, designed for organizing collections of data and enabling advanced data manipulation


//string: used for alphabetics/alphanumric values 
let surname = "Patil";
let surname1 = '233Pa333til33312133';

console.log("surname", surname);

//typeof() : operator is used to get type of data.

console.log("data type of sr1", typeof (surname1));

//number : when wats to store num data

let marks = 70;
console.log(marks)
console.log('dt of marks', typeof (marks));

let amt = 9999999999999999n;
let amount = BigInt(amt);
console.log(amount);
console.log(typeof (amount));
//2.056//2.1

let a = 10.333;
console.log(typeof (a));

//null : data type of null: object
let b = null;
console.log(b);
console.log(typeof (b));

//undefined 
let d;
console.log(d);
console.log(typeof (d));

//boolean : true/false
let isBottleEmpty = true;
console.log(isBottleEmpty);
console.log(typeof (isBottleEmpty));

//object : 
let c = 89;

//99,556,45,56 
// array of item: lsit['Poonam','Ram','Ravi']
// array object [{name:'poonam', age:'20'}]

let fruits = []; //empty array

let fruits1 = ['Banana', 'Apple', 'grapes'];

let num = [10, 20, 30, 40];

//js allows us for hetrogenious array

//let data = ['Pune',12,'Apple',null,undefined,test(),true]
//array index always starts with the 0, 
//length : no of items
//length is a js property which is used to get length of array or string
console.log(fruits.length);

let text = "hvduhsvi hh    jjj"
console.log(text.length);

console.log(fruits1);
console.log(fruits1[4]);

let obj = {} //empty obj
let obj1 = {
    name: "poonam",
    age: 20,
    passed: true,
    mob: 787878787
}

console.log(obj1);
console.log(obj1.Mob);

let arr_obj = [
    {
        name: "poonam",
        age: 30
    },
    {
        name: "Pooja",
        age: 30
    },
    {
        name: "Ram",
        age: 30
    }]

    console.log(arr_obj);
    console.log(arr_obj[0]);
    console.log(arr_obj[0].age);
    console.log(arr_obj[2].name);

    //object : null/array/obj
    console.log(typeof(arr_obj));
    console.log(typeof(obj1));


    let arr = [10,100,12,15,[44,55,33,[11,44,7,0]]];
    console.log(arr[4][1]);
    console.log(arr);
    console.log(arr[4]); 
     console.log(arr[4][3]);
     console.log(arr[4][3][2]);