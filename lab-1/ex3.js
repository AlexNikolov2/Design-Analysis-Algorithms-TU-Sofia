function arr(arr) {
  //find the number of the equal elements in the longest round of ones

  let round = 1;
  let currentround = 1;
  let equals = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      currentround++;
      equals++;
    } else {
      if (currentround > round) {
        round = currentround;
        equals++;
      }
      currentround = 1;
    }
  }

  if (currentround > round) {
    round = currentround;
  }

  console.log(round);
  console.log(equals);
}

//fix
arr([1, 2, 3, 4, 5, 5, 5, 6, , 7, 7, 8, 8, 8, 8]);
