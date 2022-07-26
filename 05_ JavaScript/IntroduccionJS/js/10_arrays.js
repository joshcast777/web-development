// ARRAYS

const numbers = [10, 20, 30, 40, 50];

console.log(numbers);
console.table(numbers); // Generate a table

const months = new Array("January", "February", "March", "April", "May"); // With the constructor

console.log(months);
console.table(months);

const array = ["Hello", 20, true, "Yes", null, {my_name: "Joshua", job: "Developer"}, [1, 2, 3]];

console.log(array);
console.table(array); // Generate a table

// Return a value of an array
console.log(array[5]); // With the index
console.table(array[5]); // With the index
console.log(array.length); // To know the saize

// To iterate the array
array.forEach((a) => console.log(a));