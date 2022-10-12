/* ====================================== */
/*                 Objects 5              */
/* ====================================== */

console.log(something)  /* undefined */
// console.log(PI);     /* TDZ */
// console.log(myVar);  /* TDZ */


const PI = 3.14;
var something = 'IJSE';
let myVar = 'ESOFT';

myMethod();

function myMethod(){
    console.log('Hello My Method..!');
}

// Classes are under hoisting process
// new Student('S001', 'Kasun');   //Student class still TDZ

//let Student = class Student{      /* Class expression */
// OR
class Student{
    #id;
    #name;

    constructor(id, name){
        this.#id = id;
        this.#name = name;
    }
}

new Student('S001', 'Hiran');

class Employee{
    #id;
    #name;
    address;    // Data property
     
    constructor(id, name, address){
        this.#id = id;
        this.#name = name;
    }

    // Accesor property    
    get id(){
        console.log('Getter');
        return 'E-' + this.#id;
    }

    set id(id){
        console.log('Setter');
        this.#id = id;
    }

    getName(){
        return this.#name;
    }

    setName(name){
        this.#name = name;
    }
}

const e001 = new Employee(1, 'Kasun', 'Galle');
console.log(e001);          /* Employee {} */
console.log(e001.name);     /* undefined */
console.log(e001.id);       /* E-1 */
e001.id = 2;                /* Setter */
console.log('id' in e001);      /* true */
console.log(e001.getName());    /* Kasun */