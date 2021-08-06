// let for variable values
// const for constant values 

let myName = "Max";
console.log(myName);

myName = "Manu";
console.log(myName);

/*
output is>
Max
Manu
(myName value is changed successfully.)
*/

const mySurname = "Dylan";
console.log(myName);

mySurname = "Styles";
console.log(myName);

/* 
output is>
TypeError: Assignment to constant variable.
*/