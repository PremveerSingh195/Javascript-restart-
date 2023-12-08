let a= [1,3,5,7,9]
let b= [2,4,6,8,0]

function sumofelementoftwoarray(ar1 ,ar2) {
    
    if (ar1.length != ar2.length) {
        result ('both array are not equal')
    }

    const result = []

    for (let i = 0; i < ar1.length; i++) {
        result.push(ar1[i]+ar2[i])
    }

    return result;
}

console.log(sumofelementoftwoarray(a,b));