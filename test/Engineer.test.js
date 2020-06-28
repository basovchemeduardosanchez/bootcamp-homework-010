const Engineer = require("../lib/Engineer");
// ? To fulfill this test we must set a GitHub account as the fourth parameter of the constructor
// ? and assign the value to the github property of the class
test("Can set GitHUb account via constructor", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Foo", 1, "test@test.com", testValue);
  expect(e.github).toBe(testValue);
});
// ? To fulfill this test we must create a method getRole that returns the string Engineer
// ? getRole() is the method to define on the class
// ? should return \"Employee\"" describes the value desired
test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Foo", 1, "test@test.com", "GitHubUser");
  expect(e.getRole()).toBe(testValue);
}); 
//? To fulfill this test we must create a method getGithub that returns the github property of the class
test("Can get GitHub username via getGithub()", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Foo", 1, "test@test.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});
