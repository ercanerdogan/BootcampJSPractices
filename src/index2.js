console.clear();

const personalInfo = getPersonalInfo();
const experienceInfo = getExperienceInfo();

const completeInfo = { ...personalInfo, ...experienceInfo };

//console.log(completeInfo);

//deep clone
const copyObj = JSON.parse(JSON.stringify(personalInfo));

copyObj.city.name = "ankara";

console.log(copyObj);

function getPersonalInfo() {
  return {
    name: "x-name",
    surname: "x-surnam",
    age: 123,
    city: {
      name: "izmir"
    }
  };
}

function getExperienceInfo() {
  return {
    company: "x-company",
    salary: "x-salary",
    experienc: "x-exp"
  };
}

//split string array and sort and join again
const myString = "ercan erdogan";
const sortedString = [...myString].sort().join("");

console.log(sortedString);

let res = sumNumbers(1, 2, 3, 4, 5, 456436, 7854, 3, 23, 234, 345645);

console.log("outer sum=", res);

function sumNumbers(...numbers) {
  let sum = 0;
  numbers.forEach((x) => (sum += x));
  console.log("inner sum=", sum);
  return sum;
}
