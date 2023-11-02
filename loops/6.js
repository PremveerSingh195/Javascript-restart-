function findfactorial(number) {
    if (number <0) {
        return "negative number"
    }else if(number === 0){
        return 1
    }else{
        factorial = 1
        i =1 ;
        while (i <= number) {
            factorial *= i;
            i++;
        } 
        return factorial
    }
    
}

let num = 7;
console.log(findfactorial(num));