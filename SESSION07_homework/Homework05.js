let month = +prompt("Nhập số tháng trong năm.");

switch (month) {
case 1:
    console.log("Tháng 1 có 31 ngày");
    break;
case 2:
    console.log("Tháng 2 có 28 hoặc 29 ngày");
    break;
case 3:
    console.log("Tháng 3 có 31 ngày");
    break;
case 4:
    console.log("Tháng 4 có 30 ngày");
    break;
case 5:
    console.log("Tháng 5 có 31 ngày");
    break;
case 6:
    console.log("Tháng 6 có 30 ngày");
    break;
case 7:
    console.log("Tháng 7 có 31 ngày");
    break;
case 8:
    console.log("Tháng 8 có 31 ngày");
    break;
case 9:
    console.log("Tháng 9 có 30 ngày");
    break;
case 10:
    console.log("Tháng 10 có 31 ngày");
    break;
case 11:
    console.log("Tháng 11 có 30 ngày");
    break;
case 12:
    console.log("Tháng 12 có 31 ngày");
    break;
default:
    console.log(" không hợp lệ");
    break;
}