/* ====================================== */
/*                 Objects 3              */
/* ====================================== */

/* Encapsulated via convension */
// first method | Via convension
// function Student(id, name, grade){
//     this.id = id;
//     this.name = name;
//     this.grade = grade;
// }

// Student.prototype.printDetails = function(){
//     console.log(this.id, this.name, this.grade);
// }

console.log("----------------------------------------------------");

/* Clousers */

// console.log("---Clousers---");


// function execute(val) {
//     val++;
//     return function exec1(val){
//         --val;
//         return function exec2(val){
//             return val++;
//         }
//     }
// }

// console.log(execute(5)(6)(8));

console.log("----------------------------------------------------");

// let x = null;

// function OuterFun(args) {

//     let x = args;
//     // let x = arg;

//     function InnerFun() {
//         console.log(x);
//     }

//     return InnerFun;
// }

// const innerFunc1 = OuterFun('ijse');
// const innerFunc2 = OuterFun('esoft');
// console.log(innerFunc1 == innerFunc2);
// innerFunc2();
// innerFunc1();

console.log("----------------------------------------------------");


// function OuterFunction(arg) {

//     let something = arg;

//     function InnerFunction() {
//         console.log("Inner function", something);
//     }

//     return InnerFunction; /* return InnerFunction memory location */
// }

// const InnerFunction = OuterFunction('ijse');
// InnerFunction();

console.log("----------------------------------------------------");


// function OuterFun() {

//     let outerX = 10;

//     function NestedFun1() {
//         let nestedFun1X = 30;
//         console.log(outeY);
//         console.log(nestedFun1X);
//     }

//     function NestedFun2() {
//         let nestedFun2X = 40;
//         console.log(nestedFun2X, outeX);
//     }

//     let outerY = 20;

// }

console.log("----------------------------------------------------");

// 2nd method | Via clousers
// function Student(id, name, grade){
//     this.id = id;
//     this.name = name;
//     this.grade = grade;
// }

// Student.prototype.printDetails = function(){
//     console.log(this.id, this.name, this.grade);
// }

// const s001 = new Student('S001', 'Kasun', 75);
// const s002 = new Student('S002', 'Nuwan', 80);
// const s003 = new Student('S003', 'Supun', 65);

// s001.printDetails();
// s002.printDetails();

console.log("----------------------------------------------------");
console.log("--- Class based approach ---");


// function Student(id, name, address) {
//      this.id = id;
//      this.name = name;
//      this.address = address;
// }

// Student.prototype.printDetails = function(){
//     console.log(this.id, this.name, this.address);
// }

/* OR */

// class Student{
//     id;
//     name;
//     address;

//     constructor(id, name, address){
//         this.id = id;
//         this.name = name;
//         this.address = address;
//     }

//     printDetails(){
//         console.log(this.id, this.name, this.address);
//     }

// }

// const s004 = new Student('S004', 'Kasun', 'Panadura');
// const s005 = new Student('S005', 'Dasun', 'Galle');
// const s006 = new Student('S006', 'Chamika', 'Matara');

// s004.printDetails();
// s005.printDetails();
// s006.printDetails();

console.log("----------------------------------------------------");
console.log("--- Sample 6 | private variables in 2021 ---");

class Student{
    #id;
    #name;
    #address;

    constructor(id, name, address){
        this.#id = id;
        this.#name = name;
        this.#address = address;
    }

    printDetails(){
        this.#internalMethod();
    }

    #internalMethod(){
        console.log(this.#id, this.#name, this.#address);
    }

}

const s007 = new Student('S007', 'Kasun', 'Panadura');
const s008 = new Student('S008', 'Dasun', 'Galle');
const s009 = new Student('S009', 'Chamika', 'Matara');

console.log(Student.id);
console.log(Student.name);
console.log(Student.address);

s007.printDetails();
s008.printDetails();
s009.printDetails();