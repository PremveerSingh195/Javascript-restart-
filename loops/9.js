let list = [2,6,8,10,20,30]

function averageOfListNumbers(numlist) {
    
    if (numlist.length === 0 ) {
        return 0
    }
    
    let sum = 0;

    for (let i = 0; i < numlist.length; i++) {
        
        sum += numlist[i]
        
    }
    return sum/numlist.length
}

console.log(averageOfListNumbers(list));