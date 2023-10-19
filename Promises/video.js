// example1 Promise // syntax

const promiseOne = new Promise(function (resolve , reject) {
    setTimeout(function () {
        console.log("asynch code is run");
        resolve()
    },2000)
})

promiseOne.then(function () {
    console.log("then is wroking");
})



// Example 2 Promise without creating variable 

new Promise(function (resolve,reject) {
    setTimeout(function () {
        console.log("aysnc part 2");
        resolve()
    },2000) 
}).then(function () {
    console.log("promise part two is done");
})


// Example 3 promise returning data

const promiseThree = new Promise(function (resolve,reject) {
    setTimeout(function () {
        resolve({username:"chai" ,email:"example@gmail.com"})
    },2000)
})

promiseThree.then(function (user) {
    console.log(user);
})
// Example 4 promise using all resolve-then, reject-catch , finally

const promiseFour = new Promise(function (resolve,reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({username:"prem", age:"24"})
        }else{
            reject("Error:Something went wrong")
        }
    },2000)
})

promiseFour.then(function (user) {
        return user.age
}).then(function (userage) {
    console.log(userage);
}).catch(function (err) {
    console.log(err);
}).finally(()=> console.log("The promise is resolved or rejected succesfully"))


// Example 5 instead of using .then or .catch we use async await


const promiseFive = new Promise(function (resolve,reject) {
    setTimeout(function () {
        let error = false
        if (!error) {
            resolve({username:"prem", age:"24"})
        }else{
            reject("JS went wrong")
        }
    },2000)
})

async function consumingPromiseFive() {
    try {
        const respone = await promiseFive
        console.log(respone);
    } catch (error) {
        console.log(error);
    }
}

consumingPromiseFive()

// example 6 getting data from url using async await

async function getDataFromURL() {
  try {
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
    const parsedata = await data.json()
 
    console.log(parsedata);
  } catch (error) {
    console.log("error: ", error);
  }
}

getDataFromURL()


// getting data from url using then and catch

fetch('https://jsonplaceholder.typicode.com/users').
then(function (data) {
    return data.json()
}).then(function (parseddata) {
    console.log(parseddata);
}).catch(function (error) {
    console.log("E:" , error);
})