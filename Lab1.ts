//Q1
var arr1:number[]=[1,2,3];
arr1.push(123);
// console.log(arr1);

//Q2
var arrStrNum:(number|string)[]=[1,2,3,"salma","sara"];
// console.log(arrStrNum);

//Q3
let var1:(number|boolean);
var1=3;
var1=true;


//Q4
function Welcome(name:string="salma", msg:string="Thanks for joining"):void{
    console.log(`Hello ${name} ${msg}`)
}
// Welcome();

function Welcome2(name?:string,msg?:string):void{
    if(name===undefined && msg === undefined)
    {
        name="salma";
        msg="Thanks for joining";
        console.log(`Hello ${name} ${msg}`)
    }
}
// Welcome2();


//Q5
//interface Iemployee
interface IEmployee {
    id:number;
    name:string;
    username:string;
    email:string;
    address:{
        street:string;
        suite:string;
        city:string;
        zipcode:string;
        geo:{
            lat:string;
            lng:string;
        }
    };
}

class Employee implements IEmployee{
    id:number;
    name:string;
    username:string;
    private _username:string;
    email:string;
    address:{
        street:string;
        suite:string;
        city:string;
        zipcode:string;
        geo:{
            lat:string;
            lng:string;
        }
    };

    constructor(obj:IEmployee)
    {
        this.id=obj.id;
        this.address=obj.address;
        this.email=obj.email;
        this.username=obj.username;
        this.name=obj.name;
        this._username="salma";
    }

}

var empobj:IEmployee={
    id: 1,
    name:"Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {"lat": "-37.3159","lng": "81.1496"}
    }
}
const employee = new Employee(empobj);
// console.log(employee.address);


//Q6
class Manager extends Employee{
    ViewEmpAdress():void{
        console.log(this.address);
    }
}
var mng= new Manager(empobj);
// mng.ViewEmpAdress();


//Q7

interface IAccount{
    DateOfOpening:number;
    addCustomer:()=>void;
    removeCustomer:()=>void;
}



class Account{
    Acc_No:number;
    Balance:number;
    debitAmount():void{
        console.log("debitAmount from class account")
    };
    creditAmount():void{
        console.log("creditAmount from class account")
    };
    getBalance():void{
        console.log("getBalance from class account")
    }  
}

class Current_Account extends Account implements IAccount{
    interestRate:number;
    DateOfOpening:number;
    addCustomer():void{
        console.log("addCustomer from Current_Account")
    };
    removeCustomer():void{
        console.log("removeCustomer from Current_Account")
    };
}



class Saving_Amount extends Account implements IAccount{
    Min_Balance:number;
    DateOfOpening:number;
    addCustomer():void{
        console.log("addCustomer from Current_Account")
    };
    removeCustomer():void{
        console.log("removeCustomer from Current_Account")
    };
}
