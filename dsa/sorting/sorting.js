function bubbleSort(arr) {
    var len = arr.length;
    var swapped;

    do {
        swapped = false;

        for (var i = 0; i < len - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Swap adjacent elements if they are in the wrong order
                var temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

    return arr;
}

function mergeSort(arr) {
    //1. divide the array into halfes, until and unless, we get the single element in the array
    //2. merge two sorted array into one sorted array

    //if the array has only one element, dont split it further
    if (arr == undefined || arr.length <= 1) {
        return arr
    }

    const middle = Math.floor(arr.length / 2)

    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
    const result = []
    let i = 0
    let j = 0

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i])
            i++
        } else if (left[i] > right[j]) {
            result.push(right[j])
            j++
        }
    }

    while (i < left.length) {
        result.push(left[i])
        i++
    }

    while (j < right.length) {
        result.push(right[j])
        j++
    }

    return result
}
// var myArray = [5, 2, 9, 1, 3];
// var sortedArray = bubbleSort(myArray);
// console.log(sortedArray);

var myArray = [14, 18, 31, 21, 34, 56, 22, 39, 20, 1];
var sortedArray = mergeSort(myArray);
console.log(sortedArray);