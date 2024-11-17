function primeNumsInPerimeter(matrix) {

    const isPrime = (num) => {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    };

    let count = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (i == 0 || j == 0 || j == matrix.length - 1 || i == matrix.length - 1) {
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
primeNumsInPerimeter([[1, 2, 3, 4],
[5, 6, 7, 8],
[9, 10, 11, 12],
[13, 14, 15, 16]])