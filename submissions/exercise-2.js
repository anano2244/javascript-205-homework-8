const students = [
    { name: "Nino",   grade: 92, active: true  },
    { name: "Gio",    grade: 58, active: true  },
    { name: "Mariam", grade: 74, active: false },
    { name: "Luka",   grade: 45, active: true  },
    { name: "Ana",    grade: 88, active: false },
];

const passedNames = students.filter(student => student.grade >= 60).map(student => student.name);
console.log('passedNames:',passedNames);

const activeCount = students.filter(student => student.active).length;
console.log('activeCount:',activeCount);

const luka = students.find(student => student.name === 'Luka');
console.log('luka:',luka);

const firstFailing = students.find(student => student.grade < 60);
const firstName = firstFailing ? firstFailing.name :  "couldn't find";
console.log('firstName:',firstName);

const missing = students.find(student => student.name === 'dato');
console.log('missing:', missing);
// filter returns a new array containing all matching elements (or an empty array [] if nothing matches).
// find returns the first single matching element (or undefined if nothing matches).