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

function generateRandomGrid(n, m) {
    const grid = [];
    for (let i = 0; i < n; i++) {
        const row = [];
        for (let j = 0; j < m; j++) {
            row.push(Math.floor(Math.random() * 10) + 1);
        }
        grid.push(row);
    }
    return grid;
}

function countPerimeterPrimes(n, m) {

    const grid = generateRandomGrid(n, m);
    console.log("Generated Grid:", grid);

    const limit = 10;
    const isPrimeUpToLimit = sieveOfEratosthenes(limit);

    const primes = [];
    for (let i = 2; i <= limit; i++) {
        if (isPrimeUpToLimit[i]) primes.push(i);
    }

    let count = 0;

    for (let j = 0; j < m; j++) {
        if (isPrime(grid[0][j], primes)) count++;
    }

    for (let i = 1; i < n; i++) {
        if (isPrime(grid[i][m - 1], primes)) count++;
    }

    for (let j = m - 1; j >= 0; j--) {
        if (isPrime(grid[n - 1][j], primes)) count++;
    }

    for (let i = n - 2; i > 0; i--) {
        if (isPrime(grid[i][0], primes)) count++;
    }

    console.log("Number of perimeter primes:", count);
}

countPerimeterPrimes(3, 3)