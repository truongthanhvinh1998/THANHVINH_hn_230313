let arrs = prompt("Nhập vào một câu chưa được chuẩn hóa");
let arr = arrs.trim().toLowerCase().split(" ");

for (let i = 0; i < arr.length; i++) {
  let x = arr[i][0].toUpperCase();
  let y = arr[i].substring(1).toLowerCase();

  arr[i] = x + y;
}

let z = arr.join(" ");
console.log(z);
