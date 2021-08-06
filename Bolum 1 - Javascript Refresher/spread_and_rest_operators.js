// spread operator is ...
// yes ...
// i'm serious, it is ... (three dots)
// it is used on arrays and objects.

//ARRAYS
const colors = ["red", "green", "blue"];
const newColors = [...colors, "yellow", "cyan"];
console.log(newColors);
// output is> [ 'red', 'green', 'blue', 'yellow', 'cyan' ]

/*colors array is firstly spreaded into strings and added a new array.
what would happen if it was not spreaded before and written like [numbers, "yellow", "cyan"]
then the newColors would be [["red", "green", "blue"], "yellow", "cyan"] */

const Person = {
    name: "Max",
    gender: "male",
};

const newPerson = {
    ...Person,
    age: 28,
};

console.log(newPerson);
// output is> { name: 'Max', gender: 'male', age: 28 }
// properties of first class is spreaded and added to a new class.

//REST OPERATOR 
// is also ...

const filter = (...args) =>{
    return args.filter(el => el == 1);
}

console.log(filter(1,2,3,"1"));
// output is> [ 1, '1' ]
