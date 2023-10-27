// spread operator
var arr1 = [2, 4, 5] // 2 4 5
var arr2 = [6, 7, 8] // 6 7 8
var arr3 = [...arr1, ...arr2]
console.log(arr3)

var object1 = {
    name: "pranav",
    age: 28
}

object3 = { ...object1, ...object2 }

var object2 = {
    gender: "male",
    weight: 85,
    height: 181
}
var object3 = { ...object1, ...object2 }
console.log(object3)

var home1 = ["a", "b", "c"]
var home2 = ["d", "e", "f"]

var home3 = [...home1, ...home2]
console.log("home3: ", home3)
