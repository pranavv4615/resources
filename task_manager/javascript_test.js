
// const result = getSum(4, function () {
//     return 10
// })
// console.log(result)

// function getSum(firstNumber, secondNumber) {
//     return firstNumber + secondNumber()
// }

// let result = getData(5, function (result) {
//     return result
// })

// console.log(result)


// function getData(value, callback) {
//     const data = value + callback(20)
//     return data
// }


exampleAsync(2, 3, function (finalresult) {
    return 15 + finalresult
});

function exampleAsync(a, b, c) {
    console.log(a)
    console.log(b)
    console.log(c(a + b))
}



