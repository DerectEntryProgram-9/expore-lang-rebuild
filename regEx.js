/* Via Constructor Function */

let regExp = new RegExp('^\d{3}-\d{7}$','g');

/* Via RegExp Literal */

// regExp = /^\d{3}-\d{7}$/; /* /<regExp>/ */
regExp = /\d{3}-\d{7}/g; /* /<regExp>/ */

/* 1. via Test() */
console.log(regExp.test("077-5896531"));     /* true */
console.log(regExp.test("077-58965831"));    /* false */

/* 2. via String.match */
console.log("077-4587896".match(regExp));   /* [ '077-4587896', index: 0, input: '077-4587896', groups: undefined ] */
console.log("This is my phone number: 077-45878956".match(regExp));  /* null */

// OR

let myString = "This is my phone number: 077-45878956"
let result1 = myString.match(regExp);       /* null */
// OR
let result2 = regExp.exec(regExp);          /* null */
console.log(result1);
console.log(result2);

// After 12:00 PM

myString = `
            Kasun's phone number: 071-8956324
            Nuwan's phone number: 074-4587962
            Supun's phone number: 074-4587962
`;

console.log('-----------------------------');

// regExp = /\d{3}-\d{7}/g;

// const iterator2 = myString.matchAll(regExp);
// result2 = iterator.next();

// while (!result2.done){
//     console.log(result2.value[0]);
//     result2 = iterator.next();
// }

// do{
//     result2 = iterator.next();
//     if(result2.value) console.log(result2.value[0]);
// } while (!result2.done);

// const result3 = myString.match(regExp);
// if(result3){
//     console.log(result3[0]);
//     const sI = result3['index'] + result3[0].length;
// /////////////////////////////
//     ////////////////
// } 

// let result3 = myString.match(regExp);
// console.log(result3); 

/* ----------------------------------------- */

regExp = /\d{3}-\d{7}/g;

const iterator = myString.matchAll(regExp);
result = Array.from(iterator);

result.forEach((elm) => console.log(elm[0]));
//OR
console.log('-----------')
console.log(result[0][0]);
console.log(result[1][0]);
console.log(result[2][0]);

/* ----------------------------------------- */
console.log('-------------------')
console.log('----- Legacy ------')

/* Legacy */
regExp = /\d{3}-\d{7}/g;

/* Regular method */
result = regExp.exec(myString);
console.log(result[0]);             /* 071-8956324 */
console.log(regExp.lastIndex);      /* 46 */
result = regExp.exec(myString);
console.log(result[0]);             /* 074-4587962 */
console.log(regExp.lastIndex);      /* 46 */
result = regExp.exec(myString);
console.log(result[0]);             /* 074-4587962 */
console.log(regExp.test(myString)); /* false */
console.log(regExp.lastIndex);      /* 0 */

/* Using a loop */
while(regExp.lastIndex < myString.length){
    result = regExp.exec(myString);
    if(!result)
    console.log(regExp.exec(myString));
}

