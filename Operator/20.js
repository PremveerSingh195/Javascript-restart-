function findindMax(a,b,c) {
    if (a> b && a>c) {
        return a;
    }else if (b>a && b> c) {
        return b;
    }else{
        return c;
    }
}


let num1 = 45;
let num2 = 56;
let num3 = 9;


console.log(findindMax(num1,num3,num2));