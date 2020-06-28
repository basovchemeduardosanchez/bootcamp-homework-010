// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
// ? On this file we are going to make something called sub-classing
// ? To do sox we require the file Employee to add additional values to the class 
const Employee = require("./Employee.js");
class Manager extends Employee {
    // ? To extend the class we may copy the signature from the paren class constructor
    // ? This is not mandatory but we are doing so because of how the test requires it
    constructor(pName,pId,pEmail,pOfficeNumber){
        // ? super call the constructor of the parent class
        super(pName,pId,pEmail);
        // ? Here we just add the additional parameter
        this.officeNumber = pOfficeNumber;
    }
    getRole(){
        return "Manager";
    }
    getOfficeNumber(){
        return this.officeNumber;
    }
}
module.exports = Manager;