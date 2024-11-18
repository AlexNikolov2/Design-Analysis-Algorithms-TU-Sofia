//recursive innefective

let callsAlfa = 0;
let callsBeta = 0;

function fibonacci(n) {
    callsAlfa++
    if (n <= 1) {
        return n;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10));


//recursive with memo

function fibonacciMemo(n, memo = []) {
    callsBeta++
    if (memo[n] !== undefined) {
        return memo[n];
    }
    if (n <= 1) {
        return n;
    }

    memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo)

    return memo[n];
}

console.log(fibonacciMemo(10));


// tablical with iteration

function fibonacciIterative(n) {
    let dp = [0] * (n + 1);
    dp[1] = 1;

    for (let i = 2; i < n + 1; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
}