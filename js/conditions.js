// if (condition) {
//     //  block of code to be executed if the condition is true
//   }
//if condition is true then only compiler will execute code block
let productQuantity = 0;

if (productQuantity == 50) {
  console.log(" left 50 items only ");
}

if (productQuantity > 50) {
  console.log(" product items are more than 50 ");
} else {
  console.log(" product items are less than 50 ");
}

if (productQuantity > 50) {
  console.log("  items are availble ");
} else if (productQuantity < 50 && productQuantity > 10) {
   console.log(" less items availble ");
} else if (productQuantity < 10 && productQuantity > 1) {
    console.log(" few items availble ");
} else if (productQuantity == 0) {
    console.log("out of stock");
} else{
  console.log("out of stock");
}

let x = 12

switch (x) {
  case 0:
    day = "Sunday";
    console.log(day);
    break;
  case 1:
    day = "Monday";
    console.log(day);
    break;
  case 2:
     day = "Tuesday";
      console.log(day);
      break;
  case 3:
    day = "Wednesday";
     console.log(day);
    break;
  case 4:
    day = "Thursday";
     console.log(day);
    break;
  case 5:
    day = "Friday";
     console.log(day);
    break;
  case 6:
    day = "Saturday";
    console.log(day);
    break;
   default : console.log("default");
}

//if value matches any case it will execute that code block
//break : if break keyword is not written in cases compiler will not through any error but 
//it will consider all cases true and will exute all cases with default if it has not found break keyword inbetween