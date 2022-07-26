// PARAMS AND ARGS


function sum1(num1 = 0, num2 = 0) { // Default params
	console.log(num1 / num2);
}

sum1(10, 2);

const sum2 = function (num1 = 0, num2 = 0) {  // Default params
	console.log(num1 + num2);
};

sum2(10, 10);
