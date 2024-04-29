
//1. let,const  is having block level scope whereas,
// var is having function level scope
if (true) {
    let a = 20;
    console.log('insie block', a);
}

//console.log('outside', a);

//2.reassign value to the variable having keyword const is not possible, 
//whereas with let and var keyword it is possible
var  a = 8;
if (true) {
    a = 30;
    console.log('insie block', a);
}

//hoisting: variable can be used before it has been declared
//it is possible with var keyword, not possible with let,const keyword
d = 90;
console.log(d);
var d;

//redeclaration of variables in same scope
// is possible with var keyword, not possible with let,const

if(true){
var text = "Poonam";
var text = "Pooja";
console.log(text);
}
