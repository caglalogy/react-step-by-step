const number = 1;
const num2 = number;

console.log("number is " + number + " num2 is " + num2); 
// num2 is real copy of number. not reference

//---------------------------------------------------------//

const person = {
    name: "Max"
};
const secondPerson = person;
person.name = "Manu"

console.log(secondPerson); 
// secondPerson is pointer of person. when the properties of person is changed, secondPerson effects.

// it is same for arrays too. 

// if we want to just copy the properties to a new object which wont effect from the first object, then
// we should do it like below, 

const thirdPerson = {
    ...person,
};
person.name= "Alicia";

console.log("person's name is: " + person.name + ", third person name is: "+ thirdPerson.name)

// keep in mind, object and arrays are reference types. 
// if you reassign them you are copying the pointer not the value.