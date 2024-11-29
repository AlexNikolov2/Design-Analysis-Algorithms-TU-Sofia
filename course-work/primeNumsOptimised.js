function sieveOfEratosthenes(limit) {
    const isPrime = Array(limit + 1).fill(true);
    isPrime[0] = isPrime[1] = false;

    for (let i = 2; i * i <= limit; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= limit; j += i) {
                isPrime[j] = false;
            }
        }
    }

    return isPrime;
}

function isPrime(num, primes) {
    if (num <= 1) return false;
    for (let prime of primes) {
        if (prime * prime > num) {
            break;
        }
        if (num % prime === 0) {
            return false;
        }
    }
    return true;
}

function countPerimeterPrimes(n, m) {
    const limit = Math.max(n * m, Math.floor(Math.sqrt(n * m)) + 1);
    const isPrimeUpToLimit = sieveOfEratosthenes(limit);

    const primes = [];
    for (let i = 2; i <= limit; i++) {
        if (isPrimeUpToLimit[i]) primes.push(i);
    }

    let count = 0;

    for (let j = 1; j <= m; j++) {
        if (isPrime(j, primes)) count++;
    }

    for (let i = 2; i <= n; i++) {
        const value = (i - 1) * m + m;
        if (isPrime(value, primes)) count++;
    }

    for (let j = m; j >= 1; j--) {
        const value = (n - 1) * m + j;
        if (isPrime(value, primes)) count++;
    }

    for (let i = n - 1; i >= 2; i--) {
        const value = (i - 1) * m + 1;
        if (isPrime(value, primes)) count++;
    }

    console.log(count);

}
countPerimeterPrimes(3, 3)