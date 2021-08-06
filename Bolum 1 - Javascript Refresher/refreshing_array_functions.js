const numbers = [1, 2, 3];

const doubleNumArray = numbers.map((num)=>{
    return num*2;
});

console.log(numbers);
console.log(doubleNumArray);

/* 
output is>
[ 1, 2, 3 ]
[ 2, 4, 6 ]

numbers stays same and doubleNumArray is mapped up top numbers. 
*/