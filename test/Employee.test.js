const Employee = require("../lib/Employee");

// ? To fulfill this test is required to define the class employee in the file../lib/Employee.js
// ? To execute a single test you can use `jest  --verbose test/Employee.test.js`
test("Can instantiate Employee instance", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

// ? To fulfill this requirement we must create a constructor that defines the attribute name of the class
// ? This attribute must receive the first parameter of the constructor
test("Can set name via constructor arguments", () => {
  const name = "Alice";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

// ? To fulfill this test we must receive the ID as a second parameter of the constructor on the definition of the class 
// ? And assign the value of the parameter to the ID property of the class 
test("Can set id via constructor argument", () => {
  const testValue = 100;
  const e = new Employee("Foo", testValue);
  expect(e.id).toBe(testValue);
});
// ? to fulfill this test we must receive the email as the third parameter of the constructor ans set the email property of the class
test("Can set email via constructor argument", () => {
  const testValue = "test@test.com";
  const e = new Employee("Foo", 1, testValue);
  expect(e.email).toBe(testValue);
});
// ? To fulfill this tes we must create a getName function that return the name property of the class
test("Can get name via getName()", () => {
  const testValue = "Alice";
  // ? Declare a new Employee
  const e = new Employee(testValue);
  // ? Here we are trying to get the passed name with the function getName
  expect(e.getName()).toBe(testValue);
});

// ? To fulfill this tes we must create a getId method that return the ID property
test("Can get id via getId()", () => {
  const testValue = 100;
  // ? This creates a new employee instance
  const e = new Employee("Foo", testValue);
  // ? This expects to obtain the ID that was passed using the getId function
  expect(e.getId()).toBe(testValue);
});

// ? To fulfill this test we must create a method getEmail that returns the email property of the class
test("Can get email via getEmail()", () => {
  const testValue = "test@test.com";
  const e = new Employee("Foo", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});
// ? To fulfill this test we must create a method getRole that returns the string Employee
// ? getRole() is the method to define on the class
// ? should return \"Employee\"" describes the value desired
test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const e = new Employee("Alice", 1, "test@test.com");
  expect(e.getRole()).toBe(testValue);
});
