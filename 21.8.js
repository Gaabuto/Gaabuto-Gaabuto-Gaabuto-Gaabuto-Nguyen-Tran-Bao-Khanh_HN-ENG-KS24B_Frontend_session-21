let a,b,c;
for(let i = 100; i < 1000; i ++){
    a = Math.floor(i / 100);
    b = Math.floor((i%100)/10);
    c = i%10;
    if ( i == (a*a*a) + (b*b*b) + (c*c*c)){
        console.log(i);
    }
}