/*
const person = {
    name: 'rohan'
};

const secondPerson = person;    // in this case pointer of person got copied into secondPerson object not actual person object

person.name = "Ronak";
// after this statement
// [object Object] {
// name: "Ronak"
// }


console.log(secondPerson); */

//===========================================================================================================

const person = {
    name: 'Rohan'
};

const secondPerson = {
    ...person   // spread operator pull out the values from person obejct and pointer value gets assigned into secondPerson and print as it is
};

person.name = 'Max';

console.log(secondPerson);