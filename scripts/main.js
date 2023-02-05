const myHeading = document.getElementById("header");
const initialArrayElement = document.getElementById("initial_array");
const getBmwValueElement = document.getElementById("get_BMW_value");
const changeTheFirstItemOfCars = document.getElementById(
  "change_the_first_item_of_cars"
);
const removeLastItemInTheArray = document.getElementById(
  "remove_last_item_in_the_array"
);
const addAudiToTheArray = document.getElementById("add_Audi_to_the_array");
const spliceVolvoAndBmw = document.getElementById("splice_Volvo_and_BMW");

myHeading.textContent = "JS Basics";

// Task 1
const text = "I can eat bananas all day";
function Task1() {
  window.alert(text.slice(10, 17).toUpperCase());
}

// Task 2
let array = [];
array = getArray();
initialArrayElement.textContent = "Initial array: " + toString(array);

getBmwValueElement.textContent =
  "Get BMW value: " + array.find((x) => x === "BMW");

array = getArray();
array[0] = "Chrysler";
changeTheFirstItemOfCars.textContent =
  "Change the first item of cars: " + toString(array);

array = getArray();
array.splice(array.length - 1, 1);
removeLastItemInTheArray.textContent =
  "Remove last item in the array: " + toString(array);

array = getArray();
array.push("Audi");
addAudiToTheArray.textContent = "Add Audi to the array: " + toString(array);

array = getArray();
array.splice(1, 2);
spliceVolvoAndBmw.textContent = "Splice Volvo and BMW: " + toString(array);

function toString(array) {
  return `[ ${array.join(", ")} ]`;
}

function getArray() {
  return ["Saab", "Volvo", "BMW"];
}