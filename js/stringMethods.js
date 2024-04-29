let text = "nn kn     mkmkmkljhjh"
console.log(text.length);
//lenghth property only applicable for string data and array 

//charAt()
console.log(text.charAt(3));

//slice(start ind(including), end ind(excluding))
let text1 = text.slice(10,16);
console.log(text1);

console.log(text.slice(10));

console.log(text.slice(0));

//in negative senario slice(end ind(exclusive), start ind(inclusive))
console.log(text.slice(-5,-1));

console.log(text.slice(-1));

// substring() is similar to slice().
//The difference is that start and end values less than 0 are treated as 0 in substring().


let str = "Apple, Banana, Kiwi";
let part = str.substring(7, 13);
console.log(part);
let part1 = str.substring(-7, 13);
console.log(part1);

//substr() is similar to slice().
//The difference is that the second parameter specifies the length of the extracted part.


let part2 = str.substr(7, 5);
console.log(part2);