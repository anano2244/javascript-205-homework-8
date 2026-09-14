> 🇬🇪 [ქართული ვერსია](./EXERCISES_ka.md) · [← Back to the overview](./README.md) · [📤 How to submit](./SUBMITTING.md)

# Homework 8 — Exercises

Create the files below inside `submissions/<your-username>/` and write JavaScript code to solve each task.

Use only what the [Rules](#rules) at the bottom allow. You can run each file with:

```bash
node exercise_1.js
```

Every exercise shows its **expected output**. Your program should print exactly that.

When you print a value with a label, pass the label and the value as **two arguments**: `console.log("doubled:", doubled);` Use the labels shown in each expected output.

---

## `exercise_1.js` — `map`

Copy these three arrays into your file:

```javascript
const numbers = [1, 2, 3, 4, 5];
const names = ["nino", "gio", "mariam"];
const prices = [10, 25, 40];
```

Using **`map`** only — no loops — create and print:

1. `doubled` — every number multiplied by `2`
2. `upper` — every name in capital letters
3. `withTax` — every price with 18% tax added (the price plus 18% of itself)
4. `lengths` — the number of letters in each name

Expected output:

```text
doubled: [ 2, 4, 6, 8, 10 ]
upper: [ 'NINO', 'GIO', 'MARIAM' ]
withTax: [ 11.8, 29.5, 47.2 ]
lengths: [ 4, 3, 6 ]
```

> Notice that all four results have exactly as many elements as the array they came from. That is what `map` always does: it never adds or removes elements, it only replaces each one.

---

## `exercise_2.js` — `filter` and `find`

Copy this array into your file:

```javascript
const students = [
    { name: "Nino",   grade: 92, active: true  },
    { name: "Gio",    grade: 58, active: true  },
    { name: "Mariam", grade: 74, active: false },
    { name: "Luka",   grade: 45, active: true  },
    { name: "Ana",    grade: 88, active: false },
];
```

Print each of the following:

1. `passedNames` — the **names** of the students whose grade is `60` or more
2. `activeCount` — how many students are `active`
3. `luka` — the whole student object of the student called `"Luka"`
4. `firstFailing` — the **name** of the first student whose grade is below `60`
5. `missing` — the result of looking for a student called `"Dato"`, who is not in the array

Expected output:

```text
passedNames: [ 'Nino', 'Mariam', 'Ana' ]
activeCount: 3
luka: { name: 'Luka', grade: 45, active: true }
firstFailing: Gio
missing: undefined
```

Then answer this question in a comment at the bottom of the file:

**What does `filter` give you back, and what does `find` give you back? What happens with each of them when nothing matches?**

> Hint: for 1 you need two methods, one after the other. For 2 you do not need to count anything yourself — an array already knows its own `.length`. For 4, `find` gives you the object, so `.name` goes right after the call.

---

## `exercise_3.js` — `reduce`

Copy these into your file:

```javascript
const numbers = [4, 8, 15, 16, 23, 42];

const cart = [
    { item: "Bread",  price: 2,  quantity: 2 },
    { item: "Cheese", price: 12, quantity: 1 },
    { item: "Tea",    price: 5,  quantity: 3 },
];
```

Using **`reduce`** for all four, print:

1. `sum` — all the numbers added together
2. `total` — what the whole cart costs (every line is `price × quantity`)
3. `itemCount` — how many things are in the cart in total
4. `biggest` — the largest number in `numbers`

Expected output:

```text
sum: 108
total: 31
itemCount: 6
biggest: 42
```

> Hint for 4: the result so far is "the biggest number I have seen until now". Start from `numbers[0]`, and on every step return whichever of the two is larger. `Math.max()` is allowed inside the callback if you prefer it to an `if`.

---

## `exercise_4.js` — `some`, `every` and `forEach`

Copy this array into your file:

```javascript
const temperatures = [12, 18, 25, 30, 7];
```

Print the answers to these four questions as booleans:

1. `anyHot` — is any temperature above `28`?
2. `allAboveZero` — is every temperature above `0`?
3. `allAboveTen` — is every temperature above `10`?
4. `anyFreezing` — is any temperature below `0`?

Then use **`forEach`** to print every temperature on its own line, in the format `12 degrees`.

Expected output:

```text
anyHot: true
allAboveZero: true
allAboveTen: false
anyFreezing: false
12 degrees
18 degrees
25 degrees
30 degrees
7 degrees
```

Then answer this question in a comment at the bottom of the file:

**`temperatures.some((t) => t > 28)` and `temperatures.filter((t) => t > 28)` ask the same question. What is different about their answers?**

> Hint: `forEach` calls your callback once for each element and does not return anything. It is the array-method version of a `for...of` loop — use it when you only want to *do* something with each element, not build a new array.

---

## `exercise_5.js` — Put it together

Copy this array into your file:

```javascript
const movies = [
    { title: "Inception", year: 2010, rating: 8.8, minutes: 148 },
    { title: "The Room",  year: 2003, rating: 3.7, minutes: 99  },
    { title: "Parasite",  year: 2019, rating: 8.5, minutes: 132 },
    { title: "Cats",      year: 2019, rating: 2.8, minutes: 110 },
    { title: "Whiplash",  year: 2014, rating: 8.5, minutes: 106 },
];
```

A movie is **good** when its rating is `8` or higher.

1. Store the good movies in a `const` called `good` (you will need them more than once).
2. `goodTitles` — the titles of the good movies.
3. `goodMinutes` — how long it takes to watch all the good movies.
4. `best` — the **title** of the highest rated movie in the whole array.
5. Write an arrow function `summary(list)` that returns a sentence like the one below, and print `summary(good)`.

Expected output:

```text
goodTitles: [ 'Inception', 'Parasite', 'Whiplash' ]
goodMinutes: 386
best: Inception
summary: 3 good movies · 386 min
```

> Hint for 4: this is exercise 3's `biggest`, but the result so far is a whole movie object instead of a number. Start from `movies[0]`, compare `.rating`, and return the winner — then take `.title` of what comes out.
>
> The `·` character is a middle dot. Copy it from this page into your template literal.

---

## Rules

You may use:

* Operators (`+ - * / % ** === !== < >= && || !`), `.length`, array indexes, `Math` methods
* `const` and `let`
* Template literals and string methods
* Arrays and objects
* Arrow functions, parameters and `return`
* **`map`, `filter`, `find`, `reduce`, `some`, `every` and `forEach`**

Not allowed **in this homework**:

* `for`, `while` and `for...of` — every exercise can be solved with the methods above, and that is the point of this homework
* `.push()` — none of these methods needs it. If you are pushing into an empty array, you are writing a loop with extra steps
* `var` — use `const` or `let`
* `prompt()` — it does not exist in Node.js, so the file would crash

Write every callback as an **arrow function**.

> You already know how to write these loops by hand — that is exactly why you can now write them shorter. Each of these methods is a `for` loop that someone else already wrote for you; the only thing you still have to provide is the part that differs every time, which is the callback.

---

When your five files are ready, go to **[How to submit](./SUBMITTING.md)**.
