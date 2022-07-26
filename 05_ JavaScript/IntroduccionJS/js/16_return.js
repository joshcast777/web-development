// RETURN

function sum(n1, n2) {
	return n1 + n2;
}

console.log(sum(10, 20));

let total = 0;

function addCart(price) {
	return total += price;
}

function calcTax(total) {
	return 1.15 * total;
}

total = addCart(200);
total = addCart(400);
total = addCart(600);

console.log(total);

const totalPay = calcTax(total);

console.log(totalPay);