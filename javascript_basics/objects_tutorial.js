var sample_objects = {
    name: "pranav",
    age: null,
    height: [23, 35, 56],
    gender: "male",
    weight: 85
}

console.log(sample_objects["height"])
console.log(sample_objects.height[2])

for (keys in sample_objects) { //for..in loop(used for objects for getting all the keys and values)
    console.log("this is the key:", keys)
    console.log("this is the value:", sample_objects[keys])

    if (keys == "height") {
        console.log(keys)
        console.log(sample_objects[keys])
    }
}

var sample_objects_1 = {
    name: "pranav",
    age: null,
    height: [23, 35, 56],
    gender: "male",
    weight: 85
}

sample_objects_1.college = "xyz college"  //add the json object
delete sample_objects_1.age //delete the json object
sample_objects_1.name = "ramesh" //update the json object

console.log(sample_objects_1)








// var arr = []
// arr.push("a")
// arr.push("b")
// arr.push("c")
// arr.push("d")
// arr.push("d")
// console.log('array elements', arr)
