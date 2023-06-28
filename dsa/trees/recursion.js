// function sharan(value) {     //2
//     if (value > 1) {         //yes
//         value = value - 1    //1
//         sharan(value)       //sharan(1)
//         console.log(value)
//     }
// }

// sharan(5)


// 5!= 5*4*3*2*1

// function factorial(number) {
//     if (number == 0) {
//         return 1
//     }
//     return number * factorial(number - 1)
// }

// console.log(factorial(4))

//5 * fact(4)  = 5 * 4 * fact(3) =  5* 4* 3* fact(2) = 5*4*3*2*fact(1) = 5*4*3*2*1*fact(0) = 5*4*3*2*1*1 = 120

// function sumTillThatNumber(number) {

//     return n + sumTillThatNumber(number - 1)
// }


// sumTillThatNumber(10)


function fibonacci(n) {

    if (n == 0 || n == 1) {
        return n
    }
    return fibonacci(n - 1) + fibonacci(n - 2)
}

console.log(fibonacci(0))


