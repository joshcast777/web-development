const numbers = [10, 20, 30, 40, 50];
const months = new Array("January", "February", "March", "April", "May", "June", "July");

console.table(numbers);
console.table(months);

// Add an elemento to the end
numbers[5] = 60;
numbers.push(70, 80, 90);
// Add an elemento to the beginning
numbers.unshift(-10, -20, -30);

// Remove the last element
months.pop();
 // Remove the first element
months.shift();

months.splice(2, 1); // Remove the elements since 2, 1 elements

console.table(numbers);
console.table(months);

// Rest operator or spread operator - To keep the original array unchanged
const new_array_months1 = [...months, "August"]; // To add at the end
const new_array_months2 = ["August",...months]; // To add at the end
console.table(new_array_months1);
console.table(new_array_months2);