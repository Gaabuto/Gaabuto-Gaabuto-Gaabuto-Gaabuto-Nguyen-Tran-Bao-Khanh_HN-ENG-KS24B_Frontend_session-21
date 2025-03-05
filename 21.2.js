let le;
let chan;
for (let i = 0; i < 5; i++) {
    let number = +prompt("Nhập vào số nguyên thứ " + (i + 1));
    if(number % 2 !== 0){
        le ++;
    }else{
        chan ++;
    }
}
console.log(`tổng các số lẻ là ${le} va so chan la ${chan}`);


