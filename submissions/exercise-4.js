const temperatures = [12, 18, 25, 30, 7];

const anyHot = temperatures.some((t) => t > 28);
console.log('anyHot:',anyHot);

const allAboveZero = temperatures.every((t) => t > 0);
console.log('allAboveZero:',allAboveZero);

const allAboveTen = temperatures.every((t) => t > 10);
console.log('allAboveTen:',allAboveTen);

const anyFreezing = temperatures.some((t) => t < 0);
console.log('anyFreezing:',anyFreezing);

temperatures.forEach((temp) => { console.log(`${temp} degrees`); });
// some and filter is not the same at all. in this case some will give you yes or no answer, true or false and filter has same condition but it is non mutating method, wich means keeps an old array and gives you new one with numbers wich will be higer than 28.