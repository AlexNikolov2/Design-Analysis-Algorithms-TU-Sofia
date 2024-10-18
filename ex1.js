function find(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length - 1; i++) {
        let product = arr[i] * arr[i + 1];
        sum += product;
    }

    console.log(sum);
}

find([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26])