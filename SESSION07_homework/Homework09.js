let a = +prompt("Nhập vào số a");
let b = +prompt("Nhập vào số b");
let c = +prompt("Nhập vào số c");

if (isNaN(a) || isNaN(b) || isNaN(c)) {
  console.log("Dữ liệu nhập vào chưa chính xác");
} else {
  if (a > b && b > c) {
    console.log("Thứ tự tăng dần các số là: " + c + "," + b + "," + a);
  } else if (b > c && c > a) {
    console.log("Thứ tự tăng dần các số là: " + a + "," + c + "," + b);
  } else {
    console.log("Thứ tự tăng dần các số là: " + a + "," + b + "," + c);
  }
}