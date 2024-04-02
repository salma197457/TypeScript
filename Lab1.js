//Q1
var arr1 = [1, 2, 3];
arr1.push(123);
// console.log(arr1);
//Q2
var arrStrNum = [1, 2, 3, "salma", "sara"];
// console.log(arrStrNum);
//Q3
let var1;
var1 = 3;
var1 = true;
//Q4
function Welcome(name = "salma", msg = "Thanks for joining") {
    console.log(`Hello ${name} ${msg}`);
}
// Welcome();
function Welcome2(name, msg) {
    if (name === undefined && msg === undefined) {
        name = "salma";
        msg = "Thanks for joining";
        console.log(`Hello ${name} ${msg}`);
    }
}
class Employee {
    constructor(obj) {
        this.id = obj.id;
        this.address = obj.address;
        this.email = obj.email;
        this.username = obj.username;
        this.name = obj.name;
        this._username = "salma";
    }
}
var empobj = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: { "lat": "-37.3159", "lng": "81.1496" }
    }
};
const employee = new Employee(empobj);
// console.log(employee.address);
//Q6
class Manager extends Employee {
    ViewEmpAdress() {
        console.log(this.address);
    }
}
var mng = new Manager(empobj);
class Account {
    debitAmount() {
        console.log("debitAmount from class account");
    }
    ;
    creditAmount() {
        console.log("creditAmount from class account");
    }
    ;
    getBalance() {
        console.log("getBalance from class account");
    }
}
class Current_Account extends Account {
    addCustomer() {
        console.log("addCustomer from Current_Account");
    }
    ;
    removeCustomer() {
        console.log("removeCustomer from Current_Account");
    }
    ;
}
class Saving_Amount extends Account {
    addCustomer() {
        console.log("addCustomer from Current_Account");
    }
    ;
    removeCustomer() {
        console.log("removeCustomer from Current_Account");
    }
    ;
}
