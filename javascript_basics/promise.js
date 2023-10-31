
let ramesh = new Promise((resolve, reject) => {
    fetch('https://dummyjson.com/products/')
        .then(res => res.json())
        .then(result => resolve(result))
});

ramesh.then(result => {
    console.log(result)
}).catch(message => {
    console.log(message)
})

async function getRamesh() {
    try {
        let data = await new Promise((resolve, reject) => {
            fetch('https://dummyjson.com/products/')
                .then(res => res.json())
                .then(result => resolve(result))
        });
        console.log(data)
    } catch (err) {
        console.log("something went wrong")
    }
}

getRamesh()


const promise1 = new Promise((resolve) => {
    resolve(5);
});

const promise2 = promise1.then((result) => {
    return result * 2
});

promise2.then(data => {
    console.log(data)
})

// axios -- 3rd party library which is used to call external api
const axios = require("axios");

async function getSum(a, b) {
    return a + b
}

async function getSubtract(a, b) {
    return a - b
}

async function getMultiply(a, b) {
    return a * b
}

async function getDataFromInternet() {
    try {
        var data = {
            SUM: await getSum(2, 2),
            SUBTRACT: await getSubtract(await getSum(2, 2), 2),
            MULTIPLY: await getMultiply(await getSubtract(await getSum(2, 2), 2), 2)
        }
        return data
    } catch (error) {
        return "got some erro new";
    }
}

(async () => {
    try {
        const data = await getDataFromInternet();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
})();





