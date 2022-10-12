/* --------------------------------- */
/*              Objects 2            */
/* --------------------------------- */

console.log("Objects | 2");

const myObj1 = new Object;  /* through constructor  */
const myObj2 = {};          /* through literals */

const student1 = {
    id: 'C001',
    name: 'Kasun',
    doSomethhing(){
        console.log('do something');
    },
    printDetails(){
        console.log(this.id, this.name);
    }
};

const student2 = {
    id: 'C002',
    name: 'PAsindu',
    doSomethhing(){
        console.log('do something');
    },
    printDetails(){
        console.log(this.id, this.name);
    }
};

//-------------------------------------------------------------------------------------------------

/* Regular function (don't use 'new' keyword) */
function student(id,name, address){
    console.log(id, name, address)  /* S001 Dasun Panadura */
    console.log('student:', this);       /* return global memory location */
};

/* Constructor function -> first letter should be CAPITAL, like a java class */
function Student(id, name, address){  
    console.log(id, name, address)    /* S002 Pubudu Galle */     /* Also can use new keyword */
    
    console.log('Student:', this);      /* Empty object */
    this.id = id;   
    this.name = name;
    this.address = address;
    
    this.printDetails = function(){
        console.log(this.id, this.name, this.address);
    }

    console.log('Student:', this);       /* return memory loaction of new object */
}

const result1 = student('S001', 'Dasun', 'Panadura');

const result2 = new Student('S002', 'Pubudu', 'Galle');

const s003 = new Student('S003', 'Pubudu', 'Galle');
const s004 = new Student('S004', 'Janith', 'Colomabo');
const s005 = new Student('S005', 'Perara', 'Jaffna');
const s006 = new Student('S006', 'Hemal', 'Matara');
const s007 = new Student('S007', 'Tharindu', 'Panadura');


console.log(s003 instanceof Student);
console.log(s004 instanceof Student);
console.log(s005 instanceof Student);

console.log(result1);       /* undefined */
console.log(result2);       /* Student {} */

//--------------------------------------------------------------------------------------------------
console.log("------------------------------------------------------------");

console.log("prototype" in Student);        /* true */
console.log(Student.prototype);             /* {} */

console.log("constructor" in Student.prototype);            /* true */
console.log(Student == Student.prototype.constructor);      /* true */

console.log("__proto__" in s003);   /* true */

console.log(s003.__proto__ == Student.prototype);   /* true */
console.log(s004.__proto__ == Student.prototype);   /* true */

console.log(s003 instanceof Student);       /* true */
s003.__proto__ = null;
console.log(s003 instanceof Student);       /* false */

console.log("------------------------------------------------------------");

console.log(Student instanceof Function);               /* true */
console.log(Student.__proto__ == Function.prototype);   /* true */

console.log("------------------------------------------------------------");

console.log(Object.prototype.constructor == Object);    /* true */
console.log(Object instanceof Function);                /* true */

console.log(Student.prototype.__proto__ == Object.prototype);       /* true */
console.log(Function.prototype.__proto__ == Object.prototype);      /* true */

console.log(Function.__proto__ == Function.prototype);      /* true */

console.log("------------------------------------------------------------");

function Employee(id, name){
    this.id = id;
    this.name = name;

}

Employee.prototype.printEmployeeDetails = function(){
    console.log(this.id, this.name);
}

const e001 = new Employee('E001', 'Kasun');
const e002 = new Employee('E002', 'Pasindu');
const e003 = new Employee('E003', 'Hiran');

e001.printEmployeeDetails();
e002.printEmployeeDetails();
e003.printEmployeeDetails();

console.log("------------------------------------------------------------");

// Employee.prototype.name = 'Kasun';

// Object.prototype.school = "IJSE";

// const e001 = new Employee('E001');
// const e002 = new Employee('E002');
// console.log(e001.id);           /* E001 */
// console.log(e001.name);         /* Kasun */
// console.log(e002.id);           /* E002 */
// console.log(e002.name);         /* Kasun */
// console.log(e002.school);       /* IJSE */

// console.log([10, 20].school);   /* IJSE */

console.log("------------------------------------------------------------");

function People(id, name){
    this.id = id;
    this.name = name;
}

People.prototype.printDetails = function(){
    console.log(People.prototype);  
    // console.log(this.id, this.name);
}

function Student(id, name, school){
    this.id = id;
    this.name = name;
    this.school =  school;
}

Student.prototype.printDetails = function(){
    console.log("Student Prototype");
    console.log(this.id, this.name, this.school);
}

Student.prototype.__proto__ = People.prototype;

const s0010 = new Student('S0010', 'Kasun', "IJSE");
s0010.printDetails();
console.log(s0010 instanceof Student);
console.log(s0010 instanceof People);
console.log(s0010 instanceof Object);

console.log("------------------------------------------------------------");

function myMethod(id, name){
    console.log(this);
    console.log(id, name);
}

/* 3 method of call values */

myMethod('S011', 'Hiran');
myMethod.call({}, 'S011', 'Kasun');
myMethod.apply({}, ['S011', 'Janith']);   