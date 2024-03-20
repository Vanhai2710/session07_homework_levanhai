let a = +prompt("Nhập vào số thứ nhất: ");
let b = +prompt("Nhập vào số thứ hai: ");
let c = +prompt("Nhập vào số thứ ba: ");

let max;
if (a >= b && a >= c) {
     max = a;
} else if (b >= a && b >= c) {
     max = b;
} else {
     max = c;
}
console.log("Số lớn nhất là: " + max);