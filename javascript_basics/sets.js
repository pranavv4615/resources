

function setIntro() {
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
}

// setIntro()

function setOperations() {
    var mySet = new Set()

    //1. add elements in the set
    mySet.add(1)
    mySet.add(8)
    mySet.add(9)
    mySet.add(9)
    mySet.add(12)

    //...delete....
    // it will delete the element from set if the element exist and return true
    // or if the elemnent doest not exist in set, it will return false
    var isDeleted = mySet.delete(18)
    console.log("delete: ", isDeleted)

    //...has.....
    var hasElement = mySet.has(9)
    console.log("has", hasElement)



    console.log(mySet)
}

setOperations()



