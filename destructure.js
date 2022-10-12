/* --------------------------------- */
/*             De-structure           */
/* --------------------------------- */
console.log('--- De-structure ---');

let num1 = [10, 20, 30, 40];

/* (1) */
let [,first,, third] = num1;
console.log(first, third);      /* 20 40 */

let x = 10;
let y = 20;

// let temp = x;
// x = y;
// y = temp;
// console.log(x, y);      /* 20 10 */
/* OR */
/* (2) */
[y, x] = [x, y];
console.log(x, y);



let num2 = [50, 60, 70, 80];

console.log(num1.concat(num2));

/* right - Spread opertor */
let result = [...num1, ...num2];
console.log(result);

/* left - Rest opertor */
let [fifty, , ...num3] = num2;
console.log(fifty);
console.log(num3);

console.log('----------------------');

let studentObj = {
    id: 'S001',
    name: "Tharindu",
    address: "Panadura"
};

const {id, address} = studentObj;
console.log(id,address);            /* S001 Panadura */

const {name, ...prop} = studentObj;
console.log(name);                  /* Tharindu */
console.log(prop);                  /* { id: 'S001', address: 'Panadura' } */




