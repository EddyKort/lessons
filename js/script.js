"use strict";
for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

let num = 2;
while (num <= 16) {
    if (num % 2)
    console.log(num);
    num++;
}

const arrayOfNumbers = [];
for (let i = 5; i <= 10; i++) {
    arrayOfNumbers[i - 5] = i;
}
console.log(arrayOfNumbers);
const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];
for (let i = 0; i === arr; i++) {
    result[i - 7] = arr;
}
console.log(result);
