function AverageOfNumArray(x) {
    let total = 0;
    for (let i = 0; i < x.length; i++) {
         total += x[i];
    }

    return total/x.length
}


let NumArr = [5,7,6,8]

console.log(AverageOfNumArray(NumArr));