import axios from "axios";

console.clear();

async function getResponse() {
  console.log("1");
  //wait
  //then
  //callback

  rejectedPromise()
    .then((response) => {
      console.log(response);
    })
    .catch((e) => {
      console.log(e);
    });

  // const response = await fullFilledPromise();
  // console.log(response);

  console.log(3);
}

// getResponse();

function fullFilledPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("2-resolve");
      resolve("fullfilled return value");
    }, 3000);
  });
}

function rejectedPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("2-reject");
      reject("reject promise return value");
    }, 3000);
  });
}

console.clear();

let person = getStarwarsPersonData();

console.log(person);

function getStarwarsPersonData() {
  axios
    .get("https://swapi.dev/api/people/")
    .then((response) => {
      // console.log("1 from get");
      // const {name} = response.data;
      // console.log(name);

      console.log(response);

      const { results: character } = response.data;

      console.log(character);

      //character.forEach((per) => console.log(per.name));

      const filteredPerson = character
        .filter((p) => p.gender === "male")
        .map((p) => ({
          name: p.name
        }));

      //console.log(filteredPerson);
    })
    .catch((error) => {
      console.log(error);
    });
}
