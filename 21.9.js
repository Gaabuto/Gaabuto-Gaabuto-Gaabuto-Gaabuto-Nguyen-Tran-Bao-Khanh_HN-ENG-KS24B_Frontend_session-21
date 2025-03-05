let a =0;
let b = prompt("Mời bạn nhập 1 số bất kỳ");
for ( let i = 0; i <= b; i ++){
    if(b % i == 0){
        a ++;
    }
}
if(a == 2){
    console.log(`${b} là số nguyên tố`);
}else{
    console.log(`${b} không phải số nguyên tố`);
}