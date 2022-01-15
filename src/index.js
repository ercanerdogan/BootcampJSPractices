import "./styles.css";

let myArray = [1, "wefasdasfasf, false", { name: "ercan" }];

console.log(myArray);

myArray.push({ surname: "ercan" });

let myFunction = function (name, surname) {
  console.log(`${name} - ${surname}`);
};

myFunction("ercan", "erdoğan");

let myArrowFunc = (name, surname) => {
  console.log(`${name} - ${surname}`);
};

myArrowFunc("arrowErcan", "arrowErdoğan");

let func1 = (pName, pSurname) => ({ name: pName, surname: pSurname });

console.log(func1("ercan", "erdogan"));

let func2 = () => "no argument function";

console.log(func2());

let func3 = (arg1, arg2) => "two arguments";

console.log(func3());

let func4 = () => ({ name: "foo", surname: "bar" });

console.log(func4());

let func5 = () => ["foo", "bar"];
console.log(func5());

let func6 = () => {
  console.log("func6");
  return { name: "foo", surname: "bar" };
};

console.log(func6());

const fruitArray = ["Elma", "Armut", "Kivi", "Portakal", "Elma", "Portakal"];

fruitArray.forEach((item) => console.log(item));

const apples = fruitArray.filter((fruit) => fruit === "Elma");

console.log(apples);

const garbages = apples.map((apple) => eat(apple));

console.log(garbages);

function eat(fruit) {
  return " ";
}

let students = [
  { name: "ercan", city: "izmir" },
  { name: "ahmet", city: "izmir" },
  { name: "mehmet", city: "ankara" },
  { name: "ali", city: "istanbul" }
];

let studentNames = students.map((student) => student.name);

console.log(studentNames);

let filteredStudents = students
  .filter((student) => student.city === "izmir")
  .map((student) => student.name)
  .forEach((name) => console.log(name));

let myObject = { name: "ercan", surname: "dfasfas", age: 123 };

const { name, surname, age } = myObject;

console.log(name, surname, age);

printNames(myObject);

function printNames({ name }) {
  console.log(name);
}
