// TODO: Write code to define and export the Employee class
// To implement a class we are going to use the following code
class Employee {
    // ? This is a constructor a constructor is a like a function, a constructor initializes a class
    // ? THIS IS THE SIGNATURE OF THE METHOD === constructor(pName,pId,pEmail)
    // ? Basically everything that goes before the curly brackets
    constructor(pName,pId,pEmail){
        // ? The constructor muts receive a name parameter, creates the name attribute and receive tha value of the parameter
        this.name = pName;
        this.id = pId;
        this.email = pEmail;
    }
    // ? This is a class method to access the name property
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return 'Employee';
    }
} 
// ? To pass the tests you must export the class with the following code otherwise the test will fail anyway
module.exports = Employee;