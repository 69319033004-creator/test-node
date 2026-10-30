// var name = "John";
// name = "john";
// var age = 30;
// var isStudent = false;
// console.log(`Name: ${name}, Age: ${age}, Is Student: ${isStudent}`);

const student = {
  name: "Alice",
  age: 22,
};
student.name = "Bob";
student.age = 20;

console.log(`Student Name: ${student.name}, Student Age: ${student.age}`);
//  if (student.age > 18) {
//   console.log("You are an adult.");
// } else {
//   console.log("You are a minor.");
// }
    console.log(`Student Age: ${student.age > 18 ? "You are an adult." : "You are a minor."}`);

    function HelloWorld() {
        console.log("Hello, World!");
    }
    HelloWorld();

    function greet(name) {
        return `Hello, ${name}!`;
    }
    console.log(greet("Alice"));

    function introduce(name, age) {
        return `My name is ${name} and I am ${age} years old.`;
        //console.log(`My name is ${name} and I am ${age} years old.`);
    }
    //introduce("Bob", 25);
    console.log(introduce("Bob", 25));

function circumference(radius) {
    return 2 * Math.PI * radius;
}
    console.log(circumference(5));      
    // console.log(`Circumference = ${circumference(5)}`);
    const circumferenceArrow = (radius) => 2 * Math.PI * radius;

    console.log(`Circumference = ${circumferenceArrow(5)}`);