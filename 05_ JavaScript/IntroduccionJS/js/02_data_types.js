// DATA TAYPES

// STRINGS
const product1 = "Monitor de 20 pulgadas";
const product2 = String("Monitor de 30 pulgadas");
const product3 = new String("Monitor de 40 pulgadas"); // Object type
console.log(product1);
console.log(product2);
console.log(product3);
// STRING METHODS
console.log(product1.length); // Return the size of a string
console.log(product2.indexOf("Monitor")); // Return the index of the substring, -1 when the substring doesn't exists
console.log(product1.includes("Monitos")); // Return true if string contains substring given, false if not


// NUMBERS
const num1 = 100;
const num2 = 200;
const num3 = 200.2;
const num4 = -10;

console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);