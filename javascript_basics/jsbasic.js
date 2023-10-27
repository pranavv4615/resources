//arthimatic operations
var first_number = 8
var second_number = 6

var sum = first_number + second_number
console.log("sum: ", sum)

var sub = first_number - second_number
console.log("subtraction: ", sub)

var mul = first_number * second_number
console.log("multiplication: ", mul)

var remainder = first_number % second_number
console.log("remainder is: ", remainder)

//if and else in javascript

var age = 21
var nationality = "india"
var hasVoterId = true

if (age >= 18 && nationality == "india" && hasVoterId == true) {
    console.log("you are eligble to vote")
} else {
    console.log("you are not eligible to vote")
}

var country = "china"

if (country == "india" || country == "china") {
    console.log("belongs to asia")
} else {
    console.log("not from asia")
}

var bp = 70;

if (bp > 120 && bp < 150) {
    console.log("high blood pressure")
} else if (bp > 150) {
    console.log("very high blod pressure")
} else if (bp < 120 && bp > 80) {
    console.log("low blood pressure")
} else {
    console.log("very low bp")
}

const age = 21
age = 25
console.log(age)

var day = 4
var weekOfTheDay = ""

switch (day) {
    case 0:
        weekOfTheDay = "sunday"
        break;
    case 1:
        weekOfTheDay = "monday"
        break;
    case 3:
        weekOfTheDay = "tuesday"
        break
    case 4:
        weekOfTheDay = "wednesday"
        break
    case 5:
        weekOfTheDay = "thursday"
        break
    case 6:
        weekOfTheDay = "friday"
        break
    case 7:
        weekOfTheDay = "saturday"
        break
    default:
        weekOfTheDay = "unknown! pLEASE PROVIDE VALID DAY"
}

console.log(weekOfTheDay)

