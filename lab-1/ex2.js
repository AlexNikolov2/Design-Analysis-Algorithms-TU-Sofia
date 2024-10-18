function findAllCouples(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            let product = arr[i] * arr[j]


            sum += product;
        }

    }

    console.log(sum);

}
findAllCouples([1, 2, 3, 4])