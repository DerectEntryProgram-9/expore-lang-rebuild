/* --------------------------------- */
/*              Functions2            */
/* --------------------------------- */
console.log('--- Functions 2 ---');

// IIFE - Immediately Invoked Function Expression

/* Earlier used for create modules*/
(function (){   /* No need to function name */
    console.log("Hello IIFE..!");
})();

// iife(); /* No need to call IIFE */

var school = 'BDC';     /* Global variable */

/* used for create modules */
(function (){
    var institute = 'IJSE';  /* function declarative environment variable */
    console.log(institute);
})();

console.log('--------------------------------------')
console.log('--- Annonymous vs. Lambda function ---')

const myFun1 = function(){
    console.log('Annonymous function', this);   /* Global this */
}

myFun1();

const myFun2 = () => {
    console.log('Lambda function', this);       /*  */
}

myFun2();

console.log('--------------------------------------')

function Student(id, name){
    this.id = id;
    this.name = name;

    this.printDetails = function(){
        console.log(this.id, this.name);
    }

}

const s001 = new Student('S001', 'Tharindu');
const s002 = new Student('S002', 'Kasun');
s001.printDetails();    /* printDetailsge this wenne meka call krna kena.(s001) */
s001.printDetails.call(s002);   /* S002 Kasun */

s002.printDetails();            /* S002 Kasun */

console.log('--------------------------------------')
console.log('---------- Lambda function  ----------')
/* Lambda expresion add karama this ne */

function People(id, name){
    this.id = id;
    this.name = name;

    this.printDetails = () => {
        console.log(this.id, this.name);
    }
}

const p001 = new People('P001', 'Tharindu');
const p002 = new People('P002', 'Kasun');
p001.printDetails();    /* printDetailsge this wenne meka call krna kena.(s001) */
p001.printDetails.call(p002);   /* P001 Tharindu */

p002.printDetails(); 

console.log('--------------------------------------')
console.log('----------- Async function  ----------')