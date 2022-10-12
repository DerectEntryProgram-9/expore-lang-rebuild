/* ====================================== */
/*                 Objects 4              */
/* ====================================== */
console.log("Objects 4");

// function Student(id, name){
//     if(!Student.flag){
//         Student.flag = true;
//     }
// }

// class StudentNew {
//     #id;
//     #name;
//     static #school = 'IJSE';

//     static{
//         console.log("Student is being initialized");
//     }

//     constructor(id, name){
//         this.#id = id;
//         this.#name = name;
//     }

//     static printDetails(){
//         console.log(Student.#id, Student.#name);
//     }
// }

// const s001 = new StudentNew('S001', 'Kasun');
// const s002 = new StudentNew('S002', 'Danush');
// const s003 = new StudentNew('S003', 'Dinesh');
// const s004 = new StudentNew('S004', 'Kosala');
// const s005 = new StudentNew('S005', 'Pasindu');

// s001.printDetails();
// s002.printDetails();

/* Inheritance */

function Animal(id, name){
    this.id = id;
    this.name = name;
}

Animal.prototype.printDetails = function(){
    console.log(this.id, this.name);
}

function Dog(id, name, type){
    Animal.call(this, id, name);
    this.type = type;
}

Dog.prototype.__proto__ = Animal.prototype;

Dog.prototype.printDetails = function(){
    console.log(this.id, this.name, this.type);
}

const d001 = new Dog('D001', 'Bula', 'Dogamon');
d001.printDetails();

console.log('--------------------------------------------------');

class Animal{
    #id;
    #name;

    static{
        console.log(this.#id, this.#name);
    }

    constructor(id, name){
        this.#id = id;
        this.#name = name;
    }

    printDetails(id, name, type){
        super(id, name);
        this.type = type;
    }

    printDetails(){
        console.log(this.id, this.name, this.type);
    }

}

    console.log("---------------------------------------------");
