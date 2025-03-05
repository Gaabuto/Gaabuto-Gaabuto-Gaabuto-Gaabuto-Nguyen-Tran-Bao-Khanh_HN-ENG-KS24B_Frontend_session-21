let money = +prompt("Mời bạn nhập số tiền ( phải chia hết cho 1000");
if( money %1000 != 0 || money < 0){
    console.log("Số tiền không hợp lệ");
}else{
    let maxWithdraw = 500000;
    while( money != 0){
        let count = money/maxWithdraw;
        if(count >= 1){
            cost = Math.floor(money)
            money = money - count*maxWithdraw;
            console.log(`${maxWithdraw} - ${Math.floor(count)} tờ <br>`);
            
        }
        if(maxWithdraw == 500000){
            maxWithdraw = 200000;
        }
        if(maxWithdraw == 200000){
            maxWithdraw = 100000;
        }
        if(maxWithdraw == 100000){
            maxWithdraw = 50000;
        }
        if(maxWithdraw == 50000){
            maxWithdraw = 20000;
        }
        if(maxWithdraw == 20000){
            maxWithdraw = 10000;
        }
        if(maxWithdraw == 10000){
            maxWithdraw = 5000;
        }
        if(maxWithdraw == 5000){
            maxWithdraw = 2000;
        }
        if(maxWithdraw == 2000){
            maxWithdraw = 1000;
        }
    }
}
