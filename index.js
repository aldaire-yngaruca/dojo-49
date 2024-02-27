const array = [7, 8, 9, 1, 2, 8, 9];

function removeDuplicates(values) {
  const unique = values.filter((n, index) => {
    return values.indexOf(n) === index;
  });

  return unique;
}
const arrayLength = removeDuplicates(array).length;
const newArray = removeDuplicates(array);

console.log("Length: ", arrayLength);
console.log("A is now: ", newArray);
