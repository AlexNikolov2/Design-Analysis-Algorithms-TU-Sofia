function arr(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {

            if (i > 1 && j > 1 && i < arr.length && j < arr[i].length) {
                sum += arr[i][j];
                console.log(sum);

            }

        }
    }
}
arr([[1, 2, 3], [4, 5, 6], [7, 8, 9]])