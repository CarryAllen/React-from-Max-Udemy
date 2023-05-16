//spread Operator (3 dots)[...]

//const numbers = [1,2,3];

// const newNumbers = [...numbers, 4,5]; //op: [1,2,3,4,5];
//const newNumbers = [numbers, 4,5];  //op:[[1,2,3] 4,5];

//console.log(newNumbers);

//for object
/* const person = {
    name:"max"
};

const newPerson = {
    ...person,
    age: 27
}

console.log(newPerson); */


//Rest Operator

const filter = (...args) => {
    return args.filter(el => el === 1);     // === checks type & value equality so the "el" also has to be an number
}
console.log(filter(1,2,3));