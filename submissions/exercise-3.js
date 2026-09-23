const numbers = [4, 8, 15, 16, 23, 42];

const cart = [
    { item: "Bread",  price: 2,  quantity: 2 },
    { item: "Cheese", price: 12, quantity: 1 },
    { item: "Tea",    price: 5,  quantity: 3 },
];

const sum = numbers.reduce((acc,num ) => acc + num, 0 );
console.log('sum:',sum);

const total = cart.reduce((acc,item) => acc +(item.price * item.quantity), 0);
console.log('total:',total);

const itemCount = cart.reduce((acc, item) => acc + item.quantity, 0);
console.log('itemCount:',itemCount);

const biggest = numbers.reduce((acc, num) => Math.max(acc, num));
console.log('biggest:',biggest);