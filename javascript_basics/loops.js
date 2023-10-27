// function and loops?

function addTwoNumbers(first_number, second_number) {
    var sum = first_number + second_number

    return sum
}

function subtractTwoNumbers(first_number, second_number) {
    var subtract = first_number - second_number

    return subtract
}

// console.log("Sum is: ", addTwoNumbers(5, 6))
// console.log("subtraction is", subtractTwoNumbers(8, 6))

// loops

function printTillNumber(lastNumber) {  // 8
    for (var i = 0; i < lastNumber; i++) {
        console.log(i)
    }
}

// printTillNumber(8)

// 0, 1, 2, 3, 4, 5, 6, 7


function addNumbers(lastNumber) {
    var sum = 1
    for (var i = 1; i < lastNumber; i++) {
        sum = sum * i;
    }

    return sum
}

// console.log(addNumbers(3))

function printArray(arr) {
    var sum = 0
    for (var i = 0; i < arr.length; i++) { // i=3 3<3
        sum = sum + arr[i]                 //sum = 10
    }

    return sum
}

// var arr = [150, 120, 115, 240, 333, 278, 356]
// console.log(printArray(arr))

//you are given a list of arrat, you have to print 
//only the even numbers out of the array

function printEvenNumber(arr) {
    for (var i = 0; i < arr.length; i++) {  // i=8 8<8
        if (arr[i] % 2 == 0) {            // 
            console.log(arr[i])
        }
    }

}

// var arr = [13, 23, 12, 45, 22, 48, 66, 100] // 12, 22, 48, 66, 100
// printEvenNumber(arr)

//print largest number in the array

function getLargestNumber(arr) {
    var maxValue = arr[0]   //maxValue = 68

    for (var i = 1; i < arr.length; i++) { // i=7 7<7
        if (arr[i] > maxValue) {      // 27 > 68
            maxValue = arr[i]
        }
    }

    return maxValue
}

var arr = [12, 54, 68, 43, 9, 19, 27]
console.log(getLargestNumber(arr))










