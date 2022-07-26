// FUNCTIONS

// Function declaration - Can call function before create it
function sum1() {
	console.log(10 + 10);
}

sum1();

// Function expression - Function must be created before call it
const sum2 = function () {
	console.log(3 + 3);
}

sum2();

// IIFE function - They invoke themselves - It usefull to protect variables
(function () {
	console.log("Esto es una función");
})();