
console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.log("5");
console.log("6");
console.log("7");
console.log("8");
console.log("9");
console.log("10");

//for loop
//for(statement;condition;incr/dcr){
    //}
    //statement:will execute only once;

for(let a = 1; a < 11; a++){
    console.log(a);
}

//for in loop : object
let data = {
    name:"Poonam",
    age:60,
    mobNo:8989899797,
    city:"Mumbai"
}

for(let x in data){
 console.log(data[x]);//[]property access //data[name]>>"Poonam" data.name>>poonam
}

//for of loop: array
let data1 = [10,55,54,54,5,88,99];
for(let v of data1){
console.log(v);
}

//for
for(let b = 0; b < data1.length; b++){
console.log(data1[b]);
}

//do while


let i = 0;
do {
    console.log(i);
    i++; //i++ loop will into infinite loop

}
while (i < 5);