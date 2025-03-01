// Define the cats array
let cats = ["Milo", "Otis", "Garfield"];

// Function to append a cat to the end of the array
function destructivelyAppendCat(name) {
  cats.push(name);
}

// Function to prepend a cat to the beginning of the array
function destructivelyPrependCat(name) {
  cats.unshift(name);
}

// Function to remove the last cat from the array
function destructivelyRemoveLastCat() {
  cats.pop();
}

// Function to remove the first cat from the array
function destructivelyRemoveFirstCat() {
  cats.shift();
}

// Function to append a cat to a new array, leaving the original array unchanged
function appendCat(name) {
  return [...cats, name];
}

// Function to prepend a cat to a new array, leaving the original array unchanged
function prependCat(name) {
  return [name, ...cats];
}

// Function to remove the last cat from a new array, leaving the original array unchanged
function removeLastCat() {
  return cats.slice(0, cats.length - 1);
}

// Function to remove the first cat from a new array, leaving the original array unchanged
function removeFirstCat() {
  return cats.slice(1);
}

module.exports = {
  cats,
  destructivelyAppendCat,
  destructivelyPrependCat,
  destructivelyRemoveLastCat,
  destructivelyRemoveFirstCat,
  appendCat,
  prependCat,
  removeLastCat,
  removeFirstCat
};
