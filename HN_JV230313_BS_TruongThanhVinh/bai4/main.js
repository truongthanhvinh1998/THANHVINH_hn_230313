let listNumber = [12, 3, 4, 5, 1, 2, 54, 40];
let max = 0;
for (let i = 0; i < listNumber.length - 1; i++) {
  for (let j = i + 1; j < listNumber.length; j++) {
    if (listNumber[j] > listNumber[i]) {
      max = listNumber[i];
      listNumber[i] = listNumber[j];
      listNumber[j] = max;
    }
  }
}
console.log(listNumber);

// cach 2
let listArr = [2, 35, 6, 89, 0, 2];
listArr.sort((a, b) => b - a);

console.log(listArr);
