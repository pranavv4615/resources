//sets in javsacript:
var mySet = new Set()
mySet.add("a")
mySet.add("b")
mySet.add("c")
mySet.add("d")
mySet.add("d")
console.log("set size:", mySet.size)


var arr = [5, 2, 3, 5, 6, 7, 3, 2, 3, 7, 5, 9, 1, 4, 4]

var removeDuplicateSet = new Set(arr)
console.log("sets: ", removeDuplicateSet)
var array_sets = [...removeDuplicateSet]
console.log("sets converted to array: ", array_sets)

