//The pop() method removes the last element from an array
//The pop() method returns the value that was "popped out"

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.pop();
console.log(fruits);
console.log(fruit);

//The shift() method removes the first array element and
// "shifts" all other elements to a lower index.
//shift method returnd removed item

const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
let d = fruits1.shift();
console.log(fruits1);
console.log(d);

//The push() method adds a new element to an array (at the end)
//The push() method returns the new array length

let num = [10,20,1,55,66,22];
let pusedReturn = num.push(90,60,63);
console.log(num);
console.log(pusedReturn);


//The unshift() method adds a new element to an array (at the beginning), 
//and "unshifts" older elements
//The unshift() method returns the new array length

const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
let unshiftReturn = fruits3.unshift("papaya");
console.log(unshiftReturn);
console.log(fruits3);


//The splice() method can be used to add new items to an array at any position
// fruits.splice(2(index), 0(count of how may element should remove from index positon), "Lemon", "Kiwi"(no of items to be added));
let d1 = [10,20,30,60,88];

d1.splice(1,2,98,96);
console.log(d1);

let d2 = [10,20,30,60,88];
delete d2[2];
console.log(d2);

let d3 = [10,20,30,60,88];
let d4 = [55,10,20,30,60,88];
let d5 = d4.concat(d3);
console.log(d5);

//The flat() method creates a new array with sub-array elements 
//concatenated to a specified depth.
const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
console.log(newArr);

//The slice() method slices out a piece of an array into a new array(including start index value)
let d6 = [10,20,30,60,88];
let y = d6.slice(1,3);
console.log(y);