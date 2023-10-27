
function getOutput(arr) {
    var resultArray = []         // resultArray = [10, 20, 30, 6, 14, 24, 22]
    for (var i = 0; i < arr.length; i++) {  // i = 7; 7< 7
        resultArray.push(arr[i] * 2)     // 22
    }

    return resultArray
}
// var arr = [5, 10, 15, 3, 7, 12, 11]
//output = [10, 20, 30, 6, 14, 24, 22]
// console.log(getOutput(arr))

//push and pop
// var tesst_array = [4, 2, 3, 2, 1, 5, 8, 9]
// tesst_array.pop()
// tesst_array.pop()
// tesst_array.pop()
// console.log(tesst_array)

function reverseArray(arr) {
    var newArray = []
    for (i = arr.length - 1; i >= 0; i--) {
        newArray.push(arr[i])
    }
    return newArray
}


// var arr = [5, 7, 9, 10, 3, 4]
// console.log(reverseArray(arr))

function findIndex(arr, key) { // key =14
    for (var i = 0; i < arr.length; i++) { //i=3 3<6
        if (key == arr[i]) {           //14 == 14 no
            return i
        }
    }
}

// var arr = [5, 9, 12, 14, 16, 2]
// key = 14
// console.log(findIndex(arr, key))

// function isPalindrome(arr) {
//     var reverseArray = []
//     for (var i = arr.length - 1; i >= 0; i--) {
//         reverseArray.push(arr[i])
//     }

//     if (JSON.stringify(arr) === JSON.stringify(reverseArray)) {
//         return true
//     } else {
//         return false
//     }
// }


// var arr = [4, 2, 6]
// console.log(isPalindrome(arr))

// pointer by reference 
// pointer by value

// var x = 5
// var y = "5"

// if (x === y) {
//     console.log(true)
// } else {
//     console.log(false)
// }


// var arr1 = [2, 5, 6] // 1000
// var arr2 = [2, 5, 6] //2000

// var arr3 = arr1     //1000

// if (arr1 == arr3) {
//     console.log("equal")
// } else {
//     console.log("not equal")
// }
// var x = "[2, 5, 6]"
// var y = "[2, 5, 6]"

// if (x == y) {
//     console.log("true")
// } else {
//     console.log("false")
// }


// var arr1 = [2, 5, 6]
// var arr2 = [2, 5, 6]


// if (JSON.stringify(arr1) == JSON.stringify(arr2)) { // "[2, 5, 6]" == "[2, 5, 6]"
//     console.log("equal")
// } else {
//     console.log("not equal")
// }

// JSON.stringfy --> converts javascript object value into string

//pass by value and pass by referece


//splice and slice in javascript

var arr = [2, 5, 6, 9, 3]

var newArr = arr.slice(2, 4)
console.log(newArr)


