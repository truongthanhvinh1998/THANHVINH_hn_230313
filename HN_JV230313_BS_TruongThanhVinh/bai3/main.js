let month = Number(prompt("nhap vao thang can kiem tra "));
let year = Number(prompt("nhap vao nam can kiem tra "));
if (
  month === 1 ||
  month === 3 ||
  month === 5 ||
  month === 7 ||
  month === 8 ||
  month === 10 ||
  month === 12
) {
  alert(`thang ${month} co 31 ngay`);
} else if (month === 4 || month === 6 || month === 9 || month === 11) {
  alert(`thang ${month} co 30 ngay`);
} else if (
  month === 2 &&
  ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0 && month === 2))
) {
  alert("thang 2 co 28 ngay");
} else if (month === 2) {
  alert(`thang ${month} co 29 ngay`);
}
