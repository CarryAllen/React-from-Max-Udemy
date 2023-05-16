class Human {
    constructor() {
        this.gender = "male";
    }
    
    printGender () {
        console.log(this.gender);
    }
}

class Person extends Human {
    constructor () {
        super();
        this.name = "Rohan"; 
        this.gender = "female"
    }
    
    printMyName() {
        console.log(this.name);
    }
}

const prsn = new Person();
prsn.printMyName();
prsn.printGender();