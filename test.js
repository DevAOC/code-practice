"use strict";

function fibonacci(num, memo) {
  memo = memo || {};

  if (memo[num]) return memo[num];
  if (num <= 1) return 1;

  return (memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo));
}

const binarySearch = (arr, target) => {
  let startIndex = 0;
  let endIndex = arr.length - 1;
  while (startIndex <= endIndex) {
    let middleIndex = Math.floor((startIndex + endIndex) / 2);
    if (target === arr[middleIndex]) {
      return arr.indexOf(middleIndex);
    } else if (target > arr[middleIndex]) {
      startIndex = middleIndex + 1;
    } else if (target < arr[middleIndex]) {
      endIndex = middleIndex - 1;
    }
  }
  return -1;
};

fibonacci(6);

const palindrome = (list) => {
  const current = list.head;
  let counter = 0;
  const testArr = [];
  const firstHalf = [];
  const secondHalf = [];
  while (current) {
    testArr[counter] = current.value;
    current = current.next;
    counter++;
  }
  for (let i = 0; i < testArr.length - 1; i++) {
    let secondCounter = 0;
    if (i < Math.floor((testArr.length - 1) / 2)) {
      firstHalf[i] = testArr[i];
    } else if (i > Math.floor((testArr.length - 1) / 2)) {
      secondHalf[secondCounter] = testArr[i];
      secondCounter++;
    }
  }
  for (let i = 0; i < firstHalf.length - 1; i++) {
    if (firstHalf[i] !== secondHalf[i]) {
      return false;
    }
  }
  return true;
};
// let counter = 0;
// while (arr[counter] !== undefined) {

//   counter++;
// }

// the line within this function is code from stack overflow
const get = (obj, path) => path.split(".").reduce((o, i) => o[i], obj);

const testObj = {
  antoine: {
    male: true,
    personality: {
      happy: true,
      nice: true,
    },
    gamer: true,
  },
};

console.log(get(testObj, "antoine.male"));
console.log("=========================");

// used for finding the closest node value to an integer passed in
const findNum = (int, current, closest = Infinity) => {
  if (current) {
    if (Math.abs(current.value - int) < Math.abs(closest - int)) {
      closest = current.value;
    }
    if (current.right && int > current.value) {
      return findNum(int, current.right, closest);
    } else if (current.left && int < current.value) {
      return findNum(int, current.left, closest);
    }
    return closest;
  } else {
    return undefined;
  }
};

// Used to find the longest string in an array of strings
const findLongestStr = (arr, index = 0, longest = "") => {
  if (index !== arr.length) {
    if (arr[index].length > longest.length) {
      longest = arr[index];
    }
    return findLongestStr(arr, index + 1, longest);
  } else {
    return longest;
  }
};

// Method for a linked list turned into a function for this file (1st Solution)
const average = (current, count, sum) => {
  if (current && count && sum) {
    count = count + 1;
    sum = sum + current.value;
  } else {
    current = this.head;
    count = 1;
    sum = 0;
  }
  if (current.next) {
    return average(current.next, count, sum);
  } else {
    return sum / count;
  }
};

// 2nd Solution (Not tested)
const average2 = (current = this.head, count = 1, sum = 0) => {
  if (current && count && sum) {
    count = count + 1;
    sum = sum + current.value;
  }
  if (current.next) {
    return average(current.next, count, sum);
  } else {
    return sum / count;
  }
};

// 3rd Solution (Not tested)
// If working... try adding memoization!
const average3 = (current = this.head, count = 1, sum = 0) => {
  if (current.next) {
    return average(current.next, count + 1, sum + current.value);
  } else {
    return sum / count;
  }
};

const numeralToInt = (numeral) => {
  if (typeof numeral !== "string") {
    return "Invalid Input";
  }
  const pairs = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let num = 0;
  for (let i = 0; i < numeral.length; i++) {
    if (!pairs[numeral[i]]) {
      return "Invalid Input";
    }
    if (pairs[numeral[i]] >= pairs[numeral[i + 1]]) {
      num += pairs[numeral[i]];
    } else if (pairs[numeral[i]] < pairs[numeral[i + 1]]) {
      num -= pairs[numeral[i]];
    } else if (!numeral[i + 1]) {
      num += pairs[numeral[i]];
    }
  }
  return num;
};

console.log("NumeralToInt", numeralToInt("VIII"));
console.log(numeralToInt("XL"));
console.log(numeralToInt("IV"));
console.log(numeralToInt(5));
console.log(numeralToInt("ZXT"));
console.log(numeralToInt("MDCL"));
console.log("=======================");
