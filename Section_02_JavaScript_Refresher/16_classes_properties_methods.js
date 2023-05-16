class Human {
    gender = "male";

    printGender = () => {
        console.log(this.gender);
    }
}

class Person extends Human {
    name = "Rohan";
    gender = "female";

    printMyName = () => {
        console.log(this.name);
    }
}

const prsn = new Person ();
prsn.printMyName();
prsn.printGender();