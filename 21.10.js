let count = 0;
let b = +prompt("Mời bạn nhập số nguyên tố sẽ hiển thị");
let number = 2;
let d ='';
if(b < 0 || isNaN(b)){
    console.log("du lieu nhap vao k hop le");
}else{
    while(count < b){
        let a =0;
        for ( let i = 1; i <= number; i ++){
                if(number % i == 0){
                    a++;
         }
        }
         if (a == 2){
                count++;
                d += number+ ", ";
                
            }
            number++;
    }
}
        console.log(d);
        