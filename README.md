// "use strict";
// Question:1 
const a=12;
// console.log("Try programiz.pro", a*12);
// a raised to the power 12
// console.log("Try ", a**12);

// By default it creates a  global variable same like behaiour with var keyword only if its in strict mode.
// Question:2 
function test(){
 salary =12000
    // console.log(salary)
}
test()
// console.log(salary)

// Question:3
function test1(){
   // console.log(test1.abc)
}
test1();
test1.abc= 400
test1.abc= 600
test1();

// Question:4
// console.log({}=={}, {}==={})


// Question:5


let x={
    name :"john"
}
let y={

 ...x
}

y.name="jamson"
console.log(x.name)
