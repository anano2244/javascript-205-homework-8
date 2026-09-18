const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);
console.log(doubled);

const names = ["nino", "gio", "mariam"];
const upper = names.map(name => name.toUpperCase());
console.log(upper)

const prices = [10, 25, 40];
const withTax = prices.map(price => price * 1.18 ); 
console.log(withTax);


const lengths = names.map(name => name.length);
console.log(lengths);

