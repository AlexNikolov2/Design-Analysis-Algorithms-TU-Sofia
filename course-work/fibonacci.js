//recursive innefective

function fibonacci(n) {
    if (n <= 1) {
        return n;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(150));


//recursive with memo

function fibonacciMemo(n, memo = []) {
    if (memo[n] !== undefined) {
        return memo[n];
    }
    if (n <= 1) {
        return n;
    }

    memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo)

    return memo[n];
}
console.log(fibonacciMemo(150));