
let mathScore = prompt("Nhập điểm môn Toán của bạn:");
let literatureScore = prompt("Nhập điểm môn Văn của bạn:");
let englishScore = prompt("Nhập điểm môn Anh của bạn:");

let everageScore = (mathScore + literatureScore + englishScore) / 3;

console.log("Điểm trung bình các môn học: ", + everageScore);
    
if (everageScore >= 8.0 && everageScore <= 10) {
    console.log("Xếp loại: GiỎI");
} else if (everageScore >= 6.5 && everageScore <= 7.9) {
    console.log("Xếp loại: KHÁ");
} else if (everageScore >= 5.0 && everageScore <= 6.4) {
    console.log("Xếp loại: TRUNG BÌNH");
} else {
    console.log("Xếp loại: YẾU");
}
