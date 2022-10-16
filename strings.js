let myString1 = 'Something here';
// 'Something here'.
console.log(myString1.length);       /* 14 */

let myBoolean = true;
// true.
// console.log(myBoolean.); 

let myNumb = 10;
// 10.
// console.log(myNum.); 

// new Number();
// new Boolean();
// new String();

let myNum = new Number(10);
console.log(typeof myNum);      /* object */

let myNum2 = 10;
console.log(typeof myNum2);     /* number */

let myString = "This is a string";
const extracted = myString.substring(5,7);
console.log(extracted);

/* Dont use this, pls convert to substring */
const extracted2 = myString.substr(5, 2);  //starting index, count
console.log(extracted2);