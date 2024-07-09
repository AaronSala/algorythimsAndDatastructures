
//sum of n nutural numbers 
//linear time complexity
function sumOfNumbers(n) {
    let result = 0;
    for (i = 1; i < n; i++){
        
        result+=i
    }
return result
}
console.log(sumOfNumbers(9))

//constant time complexity

function summation(n) {
    return (n*(n+1))
}
console.log(summation(9));

//fibonacci ssequence(big O =  O(n))
function fibonacci(n) {
    const fib = [0, 1]
    
    for (let i = 2; i < n; i++){
        fib[i]=fib[i-1]+fib[i-2]
    }
    return fib
}
console.log(fibonacci(9));
console.log(fibonacci(10));

//factorial of n (big O = On)

function factorial(n) {
    result = 1
    for (let i = 2; i <= n; i++){
        result *=i 
    }
    return result;
}
console.log(factorial(5));

//prime numbers :big O  = O(n)
function primeNumbers(n) {
    if (n<2) {
        return false
    }
    for (let i = 2; i < n; i++){
        if (n % i === 0) {
            return false
        }
    }
    return true
}
console.log(primeNumbers(8));
console.log(primeNumbers(17));
console.log(primeNumbers(24));