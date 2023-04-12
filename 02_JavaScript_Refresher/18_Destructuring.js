//Destructuring: Easily extract array elements or object properties and store them in variables.

//Array Destruturing
/* [a,b] = ['Hello','Max']
console.log(a);   //Hello
console.log(b);  //Max */

//Object Destructuring
/* {name} = {name: 'Max', age:28}
console.log(name);   //Max
console.log(first);  //undefined */


const numbers = [1,2,3];
[num1, ,num3] = numbers;
console.log(num1, num3);