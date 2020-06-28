const Intern = require("../lib/Intern");
// ? To fulfill this tests we must define the class school 
test("Can set school via constructor", () => {
  const testValue = "UCLA";
  const e = new Intern("Foo", 1, "test@test.com", testValue);
  // ? THe expected value is the school
  expect(e.school).toBe(testValue);
});
// ? To fulfill this test we must create a method that returns the string "Intern"
test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Foo", 1, "test@test.com", "UCLA");
  expect(e.getRole()).toBe(testValue);
});
// ? To fulfill this test we must create a method getSchool that returns the school property of the class  
test("Can get school via getSchool()", () => {
  const testValue = "UCLA";
  const e = new Intern("Foo", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});
