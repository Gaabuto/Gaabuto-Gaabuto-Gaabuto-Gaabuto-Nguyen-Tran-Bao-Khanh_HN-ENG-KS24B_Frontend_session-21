let sum = 0;
for (let i = 0; i < 5; i++) {
    let number = +prompt("Nhập vào số nguyên thứ " + (i + 1));
    if(number % 2 !== 0){
        sum += number;
    }
}
console.log(`tổng các số lẻ là ${sum}`);


