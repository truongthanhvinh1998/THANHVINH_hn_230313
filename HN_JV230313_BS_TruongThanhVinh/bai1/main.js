let listNumber = [23, 45, 1, 67, 87, 46, 100];
let min = 0;
for (let i = 0; i < listNumber.length; i++) {
  if (min < listNumber[i]) {
    min = listNumber[i];
  }
}
console.log(min);
