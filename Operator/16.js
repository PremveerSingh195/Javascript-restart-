function FactorialOfGivenNumber(x) {
    if (x < 0) {
        return "Factorial is undefined for negative number"
    } else if ( x === 0 || x === 1) {
        return 1
    }else {
        let Factorial = 1
        for (let i = 1; i <= x ; i++) {
            Factorial *= i   
        }
        return Factorial
    }

}

console.log(FactorialOfGivenNumber(5));