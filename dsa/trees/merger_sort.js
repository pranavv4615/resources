function merge(arr1, arr2) {
    let resultArray = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            resultArray.push(arr1[i]);
            i++;
        } else if (arr2[j] < arr1[i]) {
            resultArray.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        resultArray.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        resultArray.push(arr2[j]);
        j++;
    }

    // 3O(n) = O(n)

    return resultArray;
}

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    let leftSide = mergeSort(left);
    let rightSide = mergeSort(right);

    // logn

    return merge(leftSide, rightSide);
}

const arr = [2, 5, 1, 0, 15, 19, 12];
const sortedArr = mergeSort(arr);
console.log(sortedArr);

// time_complexity = o(nlogn)
