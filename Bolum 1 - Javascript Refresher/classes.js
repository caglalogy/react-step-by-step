class Human{
    constructor(){
        this.gender = "male";
    }

    printMyGender(){
        console.log(this.gender);
    }
}

// lets inherit 

class Person extends Human{
    constructor(){
        super();            // to get inherited property and methods from Human.
        this.name = "Max";
        this.gender = "female";
    }

    printMyName (){
        console.log(this.name);
    }
    
}

const myPerson = new Person();
myPerson.printMyName();
myPerson.printMyGender();


// MORE MODERN WAY OF DOING THIS: (ES7)

/* no need to use this keyword in constructor, actually no needs for constructor. 
methods are written with arrow functions. try to remember this rules while creating classes. */

class Cat{
    fur = "orange"
    sayHi = () => {
        console.log("meooow");
    }
}

const deniz = new Cat();
deniz.sayHi();
console.log(deniz.fur);