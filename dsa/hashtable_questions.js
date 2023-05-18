function topKFrequent(arr, k) {
    let hashmap = new Map();

    for (let element of arr) {
        hashmap.set(element, hashmap.get(element) + 1 || 1)
    }

    let result = []
    for (let [key, value] of hashmap) {
        result.push([key, value])
    }

    result.sort((a, b) => (b[1] - a[1]))
    return result.slice(0, k).map((data) => data[0])
}

function groupAnagram(arr) {
    // [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]
    let hashmap = new Map()
    for (let element of arr) {
        hashmap.set(element, [...element].sort().join(''))
    }

    let result = []
    for (let [key, value] of hashmap) {
        result.push([key, value])
    }

    result.sort((a, b) => a[1].localeCompare(b[1]));
    let output = []
    for (let i = 0; i < result.length; i++) {
        output.push([result[i][0]])
    }
    return output
}

function productArray(arr) {


}

const arr = [1, 1, 1, 1, 2, 2, 3, 3, 4]
const k = 2
console.log("topKFrequent", topKFrequent(arr, k))
const strArr = ["eat", "tea", "tan", "ate", "nat", "bat"]
console.log("groupanagram", groupAnagram(strArr))
const arr1 = [1, 4, 6, 3]