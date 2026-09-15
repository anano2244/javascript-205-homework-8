> 🇬🇧 [English version](./README.md)

# საშინაო დავალება 8 — callback-ები და მასივის მეთოდები

მოგესალმებით მერვე საშინაო დავალებაზე! 🎉

მე-7 საშინაო დავალებაში ფუნქცია მნიშვნელობა იყო, რომელიც ცვლადში, ობიექტში ან მასივში შეგეძლოთ ჩაგედოთ. ეს დავალება ბოლო ნაბიჯს დგამს: **ფუნქციის სხვა ფუნქციისთვის გადაცემას** და იმ მასივის მეთოდების გამოყენებას, რომლებიც ზუსტად ამ იდეაზე დგას.

* **callback** — ფუნქცია, რომელსაც სხვა ფუნქციას *გადასცემთ*, რომ მან გამოიძახოს
* **`map`** — იმდენივე ელემენტი, უბრალოდ თითოეული გარდაქმნილი
* **`filter`** — იგივე ელემენტები, უბრალოდ ნაკლები
* **`find`** — ერთი ელემენტი, ან `undefined`
* **`reduce`** — მთელი მასივი ერთ მნიშვნელობად დაკეცილი
* **`some` / `every` / `forEach`**

სულ **ექვსი სავარჯიშოა**. პირველ ხუთში ციკლებს ამ მეთოდებით ჩაანაცვლებთ, მეექვსეში კი შვიდივე მეთოდს ნულიდან თავად ააგებთ და დაინახავთ, რომ არცერთი მათგანი ჯადოსნური არ არის. დანარჩენი ყველაფერი ის არის, რაც უკვე იცით: ცვლადები, მასივები, ობიექტები, შაბლონური სტრიქონები (template literals) და ისრიანი ფუნქციები.

**ვადა:** მე-10 workshop-მდე.

---

## 📄 ამ დავალების ორი გვერდი

| | |
|---|---|
| **[📚 სავარჯიშოები](./EXERCISES_ka.md)** | ექვსი სავარჯიშო, მათი მოსალოდნელი შედეგი და წესები |
| **[📤 როგორ ჩააბაროთ](./SUBMITTING_ka.md)** | fork, ბრენჩი, Pull Request — ნაბიჯ-ნაბიჯ, ჩეკლისტთან ერთად |

ჯერ წაიკითხეთ ქვემოთ მოცემული მოკლე სექცია, შემდეგ კი სავარჯიშოებზე გადადით.

---

## სანამ დაიწყებთ — რა არის callback

**callback** არის ფუნქცია, რომელსაც სხვა ფუნქციას აწვდით. თქვენ თავად არ იძახებთ მას — მეორე ფუნქცია გამოიძახებს თქვენ მაგივრად — თითოეულ ელემენტზე ერთხელ.

```javascript
const numbers = [1, 2, 3];

numbers.map(function (n) { return n * 2 });   // callback, სრულად დაწერილი
numbers.map((n) => n * 2);                    // იგივე callback, ისრიანი ფუნქციით
```

> **callback-ს მრგვალი ფრჩხილები არ უწერია.** წერთ `numbers.map(double)`-ს და არა `numbers.map(double())`-ს. ფრჩხილები `double`-ს *ახლავე* გამოიძახებდა — `map`-ს კი თავად ფუნქცია სჭირდება, რომ ხუთჯერ, ხუთი სხვადასხვა ელემენტით გამოიძახოს.

### ხუთი მეთოდი, თითო ხაზში

```javascript
const nums = [1, 2, 3, 4];

nums.map((n) => n * 10);        // [ 10, 20, 30, 40 ]  — იგივე სიგრძე, ახალი მნიშვნელობები
nums.filter((n) => n > 2);      // [ 3, 4 ]            — ნაკლები ელემენტი, უცვლელი
nums.find((n) => n > 2);        // 3                   — ერთი ელემენტი და არა მასივი
nums.some((n) => n > 3);        // true                — არის თუ არა ერთი მაინც ასეთი?
nums.every((n) => n > 3);       // false               — ყველა ასეთია?
nums.reduce((sum, n) => sum + n, 0);  // 10            — მრავალიდან ერთი მნიშვნელობა
```

`filter` ყოველთვის **მასივს** გაძლევთ — მაშინაც, როცა მხოლოდ ერთი ელემენტი ემთხვევა, და მაშინაც, როცა არცერთი (`[]`). `find` კი **თავად ელემენტს** გაძლევთ, ან `undefined`-ს. ეს განსხვავება ამ დავალების ყველაზე ხშირი შეცდომაა.

### როგორ მუშაობს `reduce`

`reduce` ორ არგუმენტს იღებს: callback-ს და **საწყის მნიშვნელობას**. callback იღებს აქამდე მიღებულ შედეგს და მიმდინარე ელემენტს და აბრუნებს ახალ შედეგს.

```javascript
const prices = [10, 20, 5];

const total = prices.reduce((sum, price) => sum + price, 0);
//                           ↑     ↑                      ↑
//                    აქამდე მიღებული  მიმდინარე ელემენტი  საწყისი მნიშვნელობა

// ნაბიჯი 1: sum = 0,  price = 10  →  10
// ნაბიჯი 2: sum = 10, price = 20  →  30
// ნაბიჯი 3: sum = 30, price = 5   →  35
console.log(total);  // 35
```

აქამდე მიღებული შედეგი აუცილებლად რიცხვი არ არის. თუ `songs[0]`-დან დაიწყებთ და ყოველ ნაბიჯზე იმ სიმღერას დააბრუნებთ, რომელსაც მეტი მოსმენა აქვს, `reduce` ყველაზე მოსმენად სიმღერას დაგიბრუნებთ — ანუ ობიექტს.

### ჯაჭვი (chaining)

`find`-ის, `some`-ის, `every`-სა და `reduce`-ის გარდა ყველა მეთოდი მასივს აბრუნებს, ამიტომ შემდეგი მეთოდი იქვე შეიძლება დაიწყოს:

```javascript
const liked = songs.filter((s) => s.liked).map((s) => s.title);
```

წაიკითხეთ მარცხნიდან მარჯვნივ: აიღე სიმღერები, დატოვე მოწონებულები, თითოეული მათგანი სათაურად აქციე.

ახლა გახსენით **[სავარჯიშოები](./EXERCISES_ka.md)**.

---

## სასარგებლო ბმულები

* `Array.prototype.map()`: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
* `Array.prototype.filter()`: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
* `Array.prototype.find()`: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
* `Array.prototype.reduce()`: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
* `Array.prototype.some()`: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
* `Array.prototype.every()`: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
* `Array.prototype.forEach()`: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
* callback ფუნქცია: https://developer.mozilla.org/en-US/docs/Glossary/Callback_function
