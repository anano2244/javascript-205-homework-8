const students = [
    { name: "Nino",   grade: 92, active: true  },
    { name: "Gio",    grade: 58, active: true  },
    { name: "Mariam", grade: 74, active: false },
    { name: "Luka",   grade: 45, active: true  },
    { name: "Ana",    grade: 88, active: false },
];

const passedNames = students.filter(student => student.grade >= 60).map(student => student.name);
console.log(passedNames);

const activeCount = students.filter(student => student.active).length;
console.log(activeCount);

const luka = students.find(student => student.name === 'Luka');
console.log(luka);

const firstFailing = students.find(student => student.grade < 60);
const firstName = firstFailing ? firstFailing.name :  "couldn't find";
console.log(firstName);

const missing = students.find(student => student.name === 'dato');
console.log(missing);