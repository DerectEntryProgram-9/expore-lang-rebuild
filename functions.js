/* --------------------------------- */
/*              Functions            */
/* --------------------------------- */
console.log('--- Functions ---');


// let studentObj = {
//     id: 'S001',
//     name: 'Kasun'
// };

// const printStudentObj = function(){
//     console.log(studentObj);    // __call__
// }

// printStudentObj();      /* { id: 'S001', name: 'Kasun' } */
// // studentobj();   /* Cannot call this */

// // new studentObj();   /*  Cannot call this  */
// printStudentObj();

// console.log(printStudentObj instanceof Function);   /* true */
// console.log(printStudentObj instanceof Object);     /* true */
// console.log(typeof printStudentObj);                /* function */

// console.log(studentObj instanceof Function);        /* false */
// console.log(studentObj instanceof Object);          /* true */
// console.log(typeof studentObj);                     /* object */

console.log('------------------------------------------');

function myMethod(id, name){
    console.log('myMethod', this, id, name);
}

myMethod('S001', 'Hiran');
myMethod.call({}, 'S001', 'Hiran');         /* myMethod {} S001 Hiran */
myMethod.apply({}, ['S001', 'Hiran']);      /* myMethod {} S001 Hiran */

const myMethodClone = myMethod.bind({}, 'S001', 'Hiran');
myMethodClone();        /* myMethod {} S001 Kasun */

console.log(myMethod == myMethodClone);     /* false */

/* How to parse arguments to a method */

// Technically method overloading support to JS, but it doesn't matter

function printDetails(){
    console.log("printDetails");
}

function printDetails(id){
    console.log("printDetails(id)");
}

console.log('------------------------------------------');

function printDetails(id, name, address){
    console.log("printDetails(id, name)");
    console.log(arguments);
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(id, name);

    address = (typeof address == 'undefined') ? 'Panadura': address;    // legacy
    console.log(id, name, address);

    /* Nullish coalescing */
    console.log('--- Nullish coalescing ---');
    address = address ?? 'Panadura';            // New (Nullish coalescing (knows as elvis operator))
    console.log(id, name, address);
}

/* Always overloadinding last method */

// printDetails('S001', 'Kasun');       /* printDetails(id, name) */
printDetails('S001');                   /* printDetails(id, name) */
// printDetails('');                    /* printDetails(id, name) */
// printDetails('daf', 'hgu', 'gkjk', true, 10);  


/* Default Parameters (Not include in java) */
/* Optional parameters have in JS(Oct 11 | 1:01PM) */
/* Optional parameters - Not neccesory to parse parameter */

console.log('------------------------------------------');
console.log('--- Newest method ---');

/* Newest method */
function printDetails(id, name, address = 'Panadura'){
    console.log(id, name, address);
}

printDetails('S004', 'Vipula'); 
printDetails(undefined, 'Vipula');

