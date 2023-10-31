function mapOperations() {
    var map = new Map()
    map.set("name", "pranav")
    map.set("age", 25)
    map.set("gender", "male")
    map.set("weight", 85)
    map.set("height", 181)
    map.set("iocl", 256)

    var hasKeys = map.has("gender")
    document.getElementById("iocl").innerHTML = map.get("iocl")

    var isDeleted = map.delete("age")
    console.log(isDeleted)
    console.log("map is: ", map)

    var height = map.get("height")
    console.log("height: ", height)

    map.forEach(function (value, key) {
        console.log("values are: ", value)
        console.log("keys are: ", key)
    })
}

mapOperations()