
function maxSumSubArray(arr, k){
    let maxSum = 0, windowStart = 0, windowSum = 0;

    for(let i=0;i<arr.length;i++){
        windowSum += arr[i]
        if(i>=k-1){
            maxSum = Math.max(maxSum, windowSum)
            windowSum -= arr[windowStart]
            windowStart++
        }
    }
    return maxSum
}

function maxAverageSubArray(arr, k){
    let maxSum = 0
    let windowSum = 0
    let windowStart = 0
    let windowAvg = 0;

    for(let i =0;i<arr.length;i++){
        windowSum += arr[i]

        if(i >= k-1){
            maxSum = Math.max(maxSum, windowSum)
            windowSum -= arr[windowStart]
            windowStart++
        }
    }
    windowAvg = Math.ceil(maxSum/k)
    return windowAvg
}

const arr = [2, 1, 5, 1, 3, 2];
const k = 3;
console.log("maxSumSubArray", maxSumSubArray(arr, k))
console.log("maxAverageSubArray", maxAverageSubArray(arr, k))