let  a = 10;
console.log("a>>>",a);
 //console.log('a++',a++);
  //post increament : it returns value first then 
 //increament a = a + 1;
console.log('a+1 before', a + 1);
console.log(a + 1, 'a+1 after');
let b = "10" 
console.log('a+b', a + b); //+ concatination L/R string /addition:L Num + R Num
//10+10 >>1010

console.log('b+a', b+a);

let c =20;

console.log('a+b+c', a + b + c);//101020
//once console found any string value it will assume all further values as string


console.log('a+b+c', a + b + c + a + c);//1010201020

console.log('a+b+c', a + c + a + b + c + a + c)//4010201020

console.log('substraction', c - a);

console.log('substraction', c - a - b);
let d =50;
console.log('substraction', c - a - b - d + d + b);//substraction assumes string value as numb
console.log('substraction', c - a - b - d + d + b + d - a)