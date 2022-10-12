console.log("Objects");

/* ============================== */
/*            Object              */
/* ============================== */

// There are 2 methods to create object
/* Via constructor */
console.log('--  Via constructor   ---')
let myObj = new Object();

console.log(myObj, typeof myObj);

/* Via object literal (Object Initializer) */
/* Most use this method */
myObj = {};

console.log(myObj, typeof myObj);

myObj.id = "C001";
myObj.name = "Hiran";
console.log(myObj);
console.log(myObj.id, myObj.name);          /* Dot notation */
console.log(myObj['id'], myObj['name']);    /* Squre bracket notation */

// [proprty/method] on object
/* in -> have or not in object */
console.log('abc' in myObj);    /* false */
console.log('id' in myObj);     /* true */
console.log('name' in myObj);   /* true */

myObj.print = function(){
    console.log(myObj.id, myObj.name);
}

// functions are hoisting as well

console.log('Do you have a method called print?',
'print' in myObj);
myObj.print();
myObj['print']();

myObj.address = 'Galle';
myObj['addres2'] = 'Colombo';
console.log('address' in myObj);
console.log('address2' in myObj);

console.log(myObj);

delete myObj.addres2;
console.log('address2' in myObj);
console.log(myObj);
delete myObj.print;
console.log(myObj);

myObj.printDetails = myFun;

function myFun(){               // functions (hoisting)
    console.log('Something');
}

myObj.printDetails();

let myObj2 = {
    id: 'C001',
    name: 'Kasun',
    addres: 'Galle',
    price: '10.25',
    displayInfo: function(){
        console.log(myObj2.price);
    }
};

console.log('id' in myObj2);
console.log('price' in myObj2);
console.log('dispalyInfo' in myObj2);

myObj2.displayInfo();

let myObj3 = {
    id: 'C001',
    name: 'Kasun',
    addres: 'Galle',
    price: '10.25',
    displayInfo: function(){
        console.log(myObj3.id, myObj3.name, myObj3.addres);
    }
};

console.log('displayInfo' in myObj3);
myObj3.displayInfo();

let sId = 'S001', sName = 'Kasun', sAddress = 'Matara';

/* Old */
let studentObj = {
    id: sId,
    name: sName,
    addres: sAddress,
    printStudentDetails(){

    }
};
console.log(studentObj);

/* New */
let studentObj2 = {
    sId, sName, sAddress,
    printStudentDetails(){

    }
};
console.log(studentObj2);

/* ---------------- */
/*      Oct 6       */
/* ---------------- */
console.log('Oct 6');

// console.log(a); /* Cannot declare this */
// const a = 10;

let customerObj = {
    _id: 'C001',
    _name: 'Kasun',      /* _name -> private (convensionary private) */
                        /* __name__ -> fully private */
    get id(){
        console.log('Getter');
        return this._id;
    }, 
    set id(newId){
        console.log('Setter');  
        return this.newId;
    },
    get name(){
        return this._name;
    },
    set name(newName){
        return this.newName;
    }, 
};

customerObj.id = 'C002';
console.log(customerObj.id);

console.log(customerObj);

console.log(Array.isArray(customerObj));    /* false */
console.log(Array.isArray([0, 1, 3]));      /* true */


// -----------------------------------------------------------------------------------------------------------

const _id = Symbol();

const i = 'employeeName';

let employeeObj = {
    _id: "C002",
    get id(){
        return this._id;
    },
    set id(newId){
        this._id = `E-${newId}`;
    },
    [i + 10]: '',   /* Computed property name (new) OR Dynamic property, */
                    /*  before 2017, const property name, it should be constant,
                    *   before 2017 propert name should be constant */
    10: 'abc'
                };

employeeObj.id = 1;
console.log(employeeObj.id);    /* E-1 */   
console.log(employeeObj);       /* { '10': 'abc', _id: 'E-1', id: [Getter/Setter], employeeName10: '' } */
console.log(employeeObj[10]);   /* abc */
// OR
console.log(employeeObj[5+5]);   /* abc */

//----------------------------------------------------------------------------------------------------------

const _name = Symbol();
console.log(_name);      /* Symbol */
let employeeObj2 = {
    [_name]: "Janidu",
    get name(){
        return this[_name];
    },
    set name(newName){
        this[_name] = newName;
    },
};

console.log(employeeObj2.name);      /* Janidu */   
console.log(employeeObj2._name);     /* undefined */     
console.log(employeeObj2);          /* { name: [Getter/Setter], [Symbol()]: 'Janidu' } */

employeeObj2.name = 'Danush';
console.log(employeeObj2.name);      /* Danush */   
console.log(employeeObj2._name);     /* undefined */     
console.log(employeeObj2);          /* { name: [Getter/Setter], [Symbol()]: 'Danush' } */