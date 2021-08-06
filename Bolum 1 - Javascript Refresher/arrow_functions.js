/*
normal functions on js>

function myFunc(){
    ...
}

arrow functions on js>

const myFunc = () =>{
    ...
}
*/

function printMyName(name){
    console.log(name);
}

printMyName("Max");

// if there is only ONE argument, than
const printMyName2 = name =>{     //forget the paranthesis around parameter
    console.log(name);
}

printMyName2("Manu");

// if the only thing function does is RETURN than,
const multiply = (number) => number * 2; //forget curly braces and return 
console.log(multiply(50));
// output is> 100 