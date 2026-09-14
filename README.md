> 🇬🇪 [ქართული ვერსია](./README_ka.md)

# Homework 8 — Callbacks and array methods

Welcome to your eighth homework! 🎉

In Homework 7 a function was a value you could store in a variable, an object or an array. This homework takes the last step: **giving a function to another function**, and using the array methods that are built on exactly that idea.

* **a callback** — a function you pass *into* another function, for it to call
* **`map`** — same number of elements, each one transformed
* **`filter`** — the same elements, only fewer
* **`find`** — one element, or `undefined`
* **`reduce`** — the whole array folded into one value
* **`some` / `every` / `forEach`**

There are **five exercises**, and in all of them you replace loops with these methods. Everything else is what you already know: variables, arrays, objects, template literals and arrow functions.

**Deadline:** before Workshop 10.

---

## 📄 The two pages of this homework

| | |
|---|---|
| **[📚 Exercises](./EXERCISES.md)** | The five exercises, their expected output, and the rules |
| **[📤 How to submit](./SUBMITTING.md)** | Fork, branch, Pull Request — step by step, plus the checklist |

Read the short section below first, then go to the exercises.

---

## Before you start — what a callback is

A **callback** is a function you hand to another function. You do not call it yourself — the other function calls it for you, once per element.

```javascript
const numbers = [1, 2, 3];

numbers.map(function (n) { return n * 2 });   // the callback, written in full
numbers.map((n) => n * 2);                    // the same callback, as an arrow
```

> **No parentheses on the callback.** You write `numbers.map(double)`, not `numbers.map(double())`. The parentheses would call `double` *right now* — and `map` needs the function itself, so it can call it five times with five different elements.

### The five methods, in one line each

```javascript
const nums = [1, 2, 3, 4];

nums.map((n) => n * 10);        // [ 10, 20, 30, 40 ]  — same length, new values
nums.filter((n) => n > 2);      // [ 3, 4 ]            — fewer elements, unchanged
nums.find((n) => n > 2);        // 3                   — ONE element, not an array
nums.some((n) => n > 3);        // true                — is at least one like this?
nums.every((n) => n > 3);       // false               — are they all like this?
nums.reduce((sum, n) => sum + n, 0);  // 10            — one value out of many
```

`filter` always gives you an **array** — even when only one element matches, even when none does (`[]`). `find` gives you the **element itself**, or `undefined`. That difference is the most common mistake in this homework.

### How `reduce` works

`reduce` takes two arguments: a callback, and the **starting value**. The callback gets the result so far and the current element, and returns the new result so far.

```javascript
const prices = [10, 20, 5];

const total = prices.reduce((sum, price) => sum + price, 0);
//                           ↑     ↑                      ↑
//                    result so far  current element   starting value

// step 1: sum = 0,  price = 10  →  10
// step 2: sum = 10, price = 20  →  30
// step 3: sum = 30, price = 5   →  35
console.log(total);  // 35
```

The result so far does not have to be a number. If you start from `songs[0]` and return whichever song has more plays, `reduce` gives you back the most played song — an object.

### Chaining

Every method except `find`, `some`, `every` and `reduce` returns an array, so the next method can start right there:

```javascript
const liked = songs.filter((s) => s.liked).map((s) => s.title);
```

Read it left to right: take the songs, keep the liked ones, turn each of those into its title.

Now open the **[exercises](./EXERCISES.md)**.

---

## Helpful links

* `Array.prototype.map()`: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
* `Array.prototype.filter()`: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
* `Array.prototype.find()`: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
* `Array.prototype.reduce()`: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
* `Array.prototype.some()`: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
* `Array.prototype.every()`: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
* `Array.prototype.forEach()`: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
* Callback function: https://developer.mozilla.org/en-US/docs/Glossary/Callback_function
