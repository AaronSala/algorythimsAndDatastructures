//sum of n nutural numbers
//linear time complexity
function sumOfNumbers(n) {
  let result = 0;
  for (i = 1; i < n; i++) {
    result += i;
  }
  return result;
}
//console.log(sumOfNumbers(9));

//constant time complexity

function summation(n) {
  return n * (n + 1);
}
//console.log(summation(9));

//fibonacci ssequence(big O =  O(n))
function fibonacci(n) {
  const fib = [0, 1];

  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}
//console.log(fibonacci(9));
//console.log(fibonacci(10));

//factorial of n (big O = On)

function factorial(n) {
  result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
//console.log(factorial(5)); //120

//prime numbers :big O  = O(n)
function primeNumbers(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
//console.log(primeNumbers(8)); //false
//console.log(primeNumbers(17)); //false
//console.log(primeNumbers(24)); //true

//the power of 2 big: logarythimic (O(logn))
function powerOf2(n) {
  if (n < 1) {
    return false;
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n /= 2;
  }
  return true;
}
//console.log(powerOf2(4)); //true
//console.log(powerOf2(8)); //true
//console.log(powerOf2(12)); //false

//RECURSON
//recursion in fibonacci  big O(2^n) "very terible"
function recursiveFibonacci(n) {
  if (n < 2) {
    return n;
  }
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}
//console.log(recursiveFibonacci(7)); //13

//recursion in factorial big O =O(n)

function recursionFactorial(n) {
  if (n == 0) {
    return 1;
  }
  return n * recursionFactorial(n - 1);
}
//console.log(recursionFactorial(5));

//linear search Big O =O(n)

function search(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}
//console.log(search([2, 3, 4, 5, 6, 7], 5));

//binary search big O = O(logn)

function binarySearch(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middleindex = Math.floor((leftIndex + rightIndex) / 2);
    if (target === arr[middleindex]) {
      return middleindex;
    }
    if (target < arr[middleindex]) {
      rightIndex = middleindex - 1;
    } else {
      leftIndex = middleindex + 1;
    }
  }
  return -1;
}
//console.log(binarySearch([2, 4, 6, 7, 9, 12, 15], 9));

const discountcalc = (discount) => (price) => price - (discount * price / 100)
const dcounter = discountcalc(20)

// console.log(discountcalc(10)(100)) 
// console.log(discountcalc(20)(100));
console.log(dcounter(100))


//Sorting big O = O(n^2)

const sorted =function (arr) {
  let swapped
  do {
    swapped =false
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = temp
        swapped=true
      }
    }
  } while (swapped)
  return arr;
}
 const  arr = [2, 6, 43, 12, 6, 42, 23, 54];
console.log(sorted(arr));