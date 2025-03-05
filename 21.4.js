let a = +prompt("Mời bạn nhập a");
let b = +prompt("Mời bạn nhập b");
let c = +prompt("Mời bạn nhập c");
let delta = b*b - 4*a*c;
let e = -b/2*a;
if(delta < 0){
    document.write("pt vô nghiệm");
}else if(delta == 0){
    document.write("pt có nghiệm kép x1 = x2 = " + e);
}else{
    let x1 = ((-b + Math.sqrt(delta))/ ( 2 * a));
    let x2 = ((-b - Math.sqrt(delta))/ ( 2 * a));
    document.write("phương trình có 2 nghiệm phân biệt: x1 = " + x1 + " và x2 = " + x2);
}