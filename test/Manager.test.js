const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");
// ? To fulfill this request the constructor must receive a forth argument 
// ? and it's value shall be assigned to the officeNumber property of the class
test("Can set office number via constructor argument", () => {
  const testValue = 100;
  const e = new Manager("Foo", 1, "test@test.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});
// ? To fulfill this request we must create a method getRole 
// ? that returns a string 
test('getRole() should return "Manager"', () => {
  const testValue = "Manager";
  const e = new Manager("Foo", 1, "test@test.com", 100);
  expect(e.getRole()).toBe(testValue);
});
// ? To fulfill this request we mus create a method getOffice that 
// ? returns a property value of the class
// !! vlvrg :/
test("Can get office number via getOfficeNumber()", () => {
  const testValue = 100;
  const e = new Manager("Foo", 1, "test@test.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});
