console.log("Hello");

/* ================================= */
/*              Arrays               */
/* ================================= */

/* Via constructor */
let myArray1 = new Array(); /* only have dynamic arrays in JS */
console.log(myArray1.length);   /* 0 */

let myArray2 = new Array(5);
console.log(myArray2.length);   /* 5 */

myArray1.push(10);
myArray1.push(20);
myArray1.push(30);
myArray1.push('Hello');
myArray1.push(true);
myArray1.push(40);
console.log(myArray1);      /* [ 10, 20, 30, 'Hello', true ] */
console.log(myArray1[2]);   /* 30 */

let pop = myArray1.pop();   /* 40 */
console.log(pop, myArray1.length);  /* 40 5 */
console.log(myArray1);      /* [ 10, 20, 30, 'Hello', true ]*/

console.log(typeof myArray1);   /* object */
console.log(Array.isArray(myArray1));   /* true */

myArray1.push(50, 60);
console.log(myArray1);

myArray1.shift();       /* Remove values from starting */
console.log(myArray1);  /* [ 20, 30, 'Hello', true, 50, 60 ] */

myArray1.unshift(-10, -5, 0);   /* add values to starting */
console.log(myArray1);  /* [ -10, -5, 0, 20, 30, 'Hello', true, 50, 60 ] */

myArray1.splice(1,1);
console.log(myArray1);  /* [ -10, 0, 20, 30, 'Hello', true, 50, 60 ] */

myArray1.splice(4,2);
console.log(myArray1);  /* [ -10, 0, 20, 30, 50, 60 ] */

myArray1.splice(2,0,10);    /* [ -10,  0, 10, 20, 30, 50, 60 ] */
console.log(myArray1);

myArray1.splice(3,1,45);    /* [ -10,  0, 10, 45, 30, 50, 60 ] */
console.log(myArray1);

let myNumbers = new Array();

/* Via array literals */

// let myNum2 = new Array(); /* OR */
let myNum2 = [ 10, 20, -10, 30, 'IJSE', true, 45 ];
console.log(myNum2);
myNum2.sort();
console.log(myNum2);

console.log(myNum2.sort().reverse());

console.log(myNum2.indexOf(5));     /* -1 */
console.log(myNum2.indexOf(30));    /* 3 */
console.log(myNum2.includes(5));    /* false */
console.log(myNum2.includes(30));   /* true */

let clonedMyNum2 = myNum2.slice();
console.log(clonedMyNum2);

let myNum3 = new Array(5);      /* [ true, 'IJSE', 45, 30, 20, 10, -10 ] */
myNum3.fill(10, 0, 5);
console.log(myNum3);        /* [ 10, 10, 10, 10, 10 ] */

myNum3 = [10, 20, 30, 40, 50];
console.log(myNum3[2]);     /* 30 */
console.log(myNum3.at(2));  /* 30 */

let myNum1 = [10, 20, 30];
myNum2 = [40, 50, 60];
let concatedArray = myNum1.concat(myNum2);
console.log(concatedArray);

let myNames = ['Hiran', 'Pubudu', 'Chathura', 'Sahan'];
console.log(myNames);
console.log(myNames.join(' | '));

let numbers = [0, 0, 0];
numbers.fill(15, 2, 3);    /* fill(value, start, ) */
console.log(numbers);

numbers[1] = 20;
console.log(numbers);   /* [ 0, 20, 15 ] */

let num2 = [0, 0, 0, 0, 0, 0];
console.log(num2);
num2.fill();
