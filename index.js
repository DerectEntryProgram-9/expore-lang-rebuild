console.log('Hello Hiran...!');

//---------------------------------------------

console.log('ECMA Script..!', 10 ,"IJSE");
console.info('ECMA Script..!', 10 ,"IJSE");
console.error('ECMA Script..!', 10 ,"IJSE");
console.warn('ECMA Script..!', 10 ,"IJSE");

//  Trailing comments


/*  Single line comments */


/*
*
*   Multiline comments
*
*/


/**
 *  Doc comments
 */

/* ============================================ */
/*  Data Types, Literals, Variables, Constants  */
/* ============================================ */

/* Recommend - use simple letter*/

console.log(0b1111);    /* 15 */
console.log(0B1111);    /* 15 */

// Octal
console.log(010);       /* 8 */     // legacy
console.log(0o10);      /* 8 */     // new (simple o or capital o)
console.log(0O10);      /* 8 */ 

// Decimal
console.log(1020);      /* 1020 */

// Hexa-decimal
console.log(0xF);       /* 15 */
console.log(0XF);       /* 15 */

// Binary
console.log(0b1111_1111);   /* 255 */

// Scientific Notation
console.log(10.25e2);       /* 1025 */
console.log(10.25E2);       /* 1025 */

// Big Int
console.log(0b1111n);   /* 15n | Binary bigint */
console.log(0o10n);     /* 8n  | Ocatal bigint */
console.log(10n);       /* 10n | Decimal bigint */
console.log(0xFn);      /* 15n | Hex bigint */

// Boolean
console.log(true, false);

// 4 methods for represent a string
console.log("Double 'quotted' \tstring.\b");    /* Scape charactors support */
                                                // Double 'quotted'        string.
console.log('Single "quotted" \tstring.\b');    /* Scape charactors support */
                                                // Single "quotted"        string.

console.log(`Non-tagged 
    template string, They also support embedding
    expression such as ${10+15}`
); /* Using tilda - support multilines,  
    * support embedding
    * expression
    * */
//    string interpolation

    /* Tag template expressions */
    console.log('---    Tag template expressions    ---');

    /* taggedFunction is newest method */
    function taggedFunction(strArray, exp1, exp2, exp3) {
        console.log("strArray =", strArray);
        console.log("exp1 =", exp1);        /* exp1 = is */
        console.log("exp2 =", exp2);        /* exp2 = tagged */
        console.log("exp3 =", exp3);        /* exp3 = undefined */
    }
    taggedFunction`Here ${'is'} a ${'tagged'} string`;  /* String interpolation  */

    /* Null and undefined representation */
    console.log('---    Null and undefined representation    ---');
    console.log(null);                  /* null */
    console.log(undefined);             /* undefined */
    console.log(Symbol() == Symbol());  /* false */

    /* Variables */
    console.log('---    Variables    ---');
    var myVar = 10;
    myVar = 'This is a string';
    myVar = false;
    myVar = "IJSE";
    console.log(myVar);     /* IJSE */

    if(true){
        var abc = 25;
        console.log(abc);   /* 25 */
    }
    console.log(abc);       /* 25 */

    let myX = 0;
    myX = "IJSE";   
    console.log(myX);     /* IJSE */
    // let myX = 25; /* cannot re-declare in let */

    if(true){
        let myX = 25;   /* let can be re-declare in block */
        let myY = 45;
        console.log(myX, myY);  /* 25 45 */
    }

    let myVar2;             /* value should be assigned */
    console.log(myVar2);    /* undefined */


    // Hoisting
    /* Temporal Dead zone (TDZ) */
    console.log('---    Hoisting    ---');

    console.log("tdz =", tdz);  /* tdz = undefined */
    var tdz;        // Hoisting
    // let tdz;        // Hoisting (TDZ)

    let myVar3 = 48;
    console.log("48 =", typeof myVar3);     /* 48 = number */

    myVar3 = 'Hiran';
    console.log("Hiran =", typeof myVar3);  /* Hiran = string */

    myVar3 = true;
    console.log("true =", typeof myVar3);   /* true = boolean */

    myVar3 = 10.25;
    console.log("10.25 =", typeof myVar3);  /* 10.25 = number */

    myVar3 = 123n;
    console.log("123n =", typeof myVar3);   /* 123n = bigint */

    myVar3 = undefined;
    console.log("undefined =", typeof myVar3);  /* undefined = undefined */

    myVar3 = 'This is a non-tagged template string';
    console.log("This is a non-tagged template string =", typeof myVar3);   /* This is a non-tagged template string = string */

    myVar3 = null;              /* null - primitive data type, but displays object (mistake) */
    console.log("null =", typeof myVar3);   /* null = object */

    myVar3 = Symbol;
    console.log("Symbol =", typeof myVar3); /* Symbol = function */


    /* Legacy constant declare method */
    // Object.defineProperty(window, "PI", {
    //     enumerable: true,
    //     configurable: false,
    //     writable: false,
    //     value: 3.14
    // });

    // console.log(PI);
    // PI = 4.5;
    // console.log(PI);

    // var PI = 3.14;
    // console.log(PI);
    /* Before 2015 */

    /* after 2015 */
    const PI = 3.14;
    // PI = 4.35; //Error
    console.log(PI);        /* 3.14 */


