let num = [10,20,30,22,55,66,88];
let num2 = [];
for (let index = 0; index < num.length; index++) {
    if( num[index] !== 55 ){
        num2.push(num[index]);
    }
}
console.log(num2);


let names = ['Pooja','poonam','Adi','Om'];
let names2 = [];
//=> arrow operator >> Arrow functions allow us to write shorter function syntax
names.forEach(item => {
    if(item !== "Adi"){
        names2.push(item)
    }
})
console.log(names2);