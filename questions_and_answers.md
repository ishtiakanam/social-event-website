

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`



#### Answer: A


<i>Write your explanation here</i>
#Description:The answer is {}.It logs the object, because we just created an empty object on the global object! That's why the console.log return us empty object.
</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`


<p>

#### Answer: C

<i>Write your explanation here</i>
#Description:JavaScript is a  dynamically typed language: we don't specify what types certain variables are. Values can automatically be converted into another type without you knowing, which is called  _implicit type coercion_.  Coercion  is converting from one type into another.

In this example, JavaScript converts the number  `1`  into a string, in order for the function to make sense and return a value. During the addition of a numeric type (`1`) and a string type (`'2'`), the number is treated as a string.so what's happening here is  `"1" + "2"`  which returns  "12".
</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`


<p>

#### Answer: B

<i>Write your explanation here</i>
#Description:First of all we took some foods in an array.The index of the foods starts with 0.In the info variable we set a parameter which index is 0.This index will replace the previous one.That's why the ans is B.
</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`


<p>

#### Answer: B

<i>Write your explanation here</i>
#Description:By default, arguments have the value of  undefined, unless a value has been passed to the function. In this case, we didn't pass a value for the  name  argument.  name  is equal to  undefined  which gets logged.

In ES6, we can overwrite this default  undefined  value with default parameters.
</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4


<p>

#### Answer: C

<i>Write your explanation here</i>
#Description:The if- condition within the forEach loop checks whether the value of num is truthy or falsy. Since the first number in the nums array is 0, a falsy value, the if statement's code block won't be executed. count only gets incremented for the other 3 numbers in the nums array, 1, 2 and 3. Since count gets incremented by 1 3 times, the value of count is 3.
</p>
</details>