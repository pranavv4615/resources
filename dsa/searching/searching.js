function linearSearch(arr, key) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === key) {
            return i
        }
    }
}

// const arr = [2, 7, 4, 9, 12, 18, 45, 35, 98]
// const key = 45
// console.log(linearSearch(arr, key))



// function linearSearch(arr, key) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == key) {
//             return i
//         }
//     }
// }

function binarySearch(arr, key) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2)

        if (key === arr[mid]) {
            return mid
        } else if (key > arr[mid]) {
            low = mid + 1
        } else if (key < arr[mid]) {
            high = mid - 1
        }
    }

    return -1
}

const arr = [12, 15, 16, 19, 35, 47, 89, 95, 105]
const key = 104
console.log(binarySearch(arr, key))

// function binarySearch(arr, key) {
//     let low = 0;
//     let high = arr.length - 1;

//     while (low <= high) {
//         let mid = Math.floor((low + high) / 2);
//         if (key == arr[mid]) {
//             return mid
//         } else if (key > arr[mid]) {
//             low = mid + 1;
//         } else if (key < arr[mid]) {
//             high = mid - 1;
//         }
//     }

//     return -1
// }


// const arr = [3, 7, 9, 12, 15, 18, 22]
// const key = 15
// console.log(linearSearch(arr, key))
// console.log(binarySearch(arr, key))



// // timecomplexity for linear search is O(n) - this works for sorted as well as unsorted array
// // timecomplexity for binary search is O(logn)- this is only for sorted array, dont use for unsorted array