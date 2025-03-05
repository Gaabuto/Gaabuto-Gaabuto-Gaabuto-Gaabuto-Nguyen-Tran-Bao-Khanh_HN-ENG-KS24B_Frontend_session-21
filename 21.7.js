let money = +prompt("Nhập số tiền gửi");
let time = +prompt("Nhập số tháng gửi");
document.write("Số tiền lãi là:" + (money *((1/100) /12) * time));