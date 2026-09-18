const movies = [
    { title: "Inception", year: 2010, rating: 8.8, minutes: 148 },
    { title: "The Room",  year: 2003, rating: 3.7, minutes: 99  },
    { title: "Parasite",  year: 2019, rating: 8.5, minutes: 132 },
    { title: "Cats",      year: 2019, rating: 2.8, minutes: 110 },
    { title: "Whiplash",  year: 2014, rating: 8.5, minutes: 106 },
];
const good = movies.filter(film => film.rating >= 8);
console.log(good);
const goodTitles = good.map(film => film.title);
console.log(goodTitles);
const goodMinutes = good.reduce((acc , film) => acc + film.minutes, 0); 
console.log(goodMinutes);
const best = movies.reduce((acc, film) => film.rating > acc.rating ? film : acc).title;
console.log(best);
const summary= (`${good.length} good movies - ${goodMinutes}`);
console.log(summary);