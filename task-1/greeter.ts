// function greeter(person : string) {
//   return "Hello, " + person;
// }
 
// let user = [1, 2, 3];
 
// document.body.textContent = greeter(user);

interface Person {
    firstName: string;
    lastName: string;
  }
   
  function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
  }
   
  let user = { firstName: "Jane", lastName: "User" };
   
  document.body.textContent = greeter(user);