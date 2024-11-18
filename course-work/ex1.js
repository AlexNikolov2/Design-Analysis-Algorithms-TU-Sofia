function primeNumsInPerimeter(n, m) {

    const isPrime = (num) => {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    };

    const matrix = Array.from({ length: n }, () =>
        Array.from({ length: m }, () => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER))
    );

    console.table(matrix);


    let count = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (i == 0 || j == 0 || j == n - 1 || i == m - 1) {
                let checkedNum = matrix[i][j]
                if (isPrime(checkedNum)) {
                    console.log(checkedNum);

                    count++
                }
            }
        }
    }

    console.log(count);

};
primeNumsInPerimeter(6, 3)