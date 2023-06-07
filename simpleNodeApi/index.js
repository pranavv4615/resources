const express = require('express')
const axios = require('axios')
const app = express()

app.use(express.json());

app.get('/', function (req, res) {
    res.send('hello,  i am running on browser')
})

app.get('/getUserDetails', function (request, response) {
    console.log(request)
    const id = request.body.id
    console.log(id)
    let data = {}
    if (id === "1") {
        data = {
            name: "Pranav Singh",
            age: 27,
            weight: 80,
            gender: "Male",
            height: 182
        }
    } else if (id === "2") {
        data = {
            name: "Vipin",
            age: 24,
            weight: 75,
            gender: "Male",
            height: 180
        }
    } else if (id === "3") {
        data = {
            name: "Naveen",
            age: 23,
            weight: 77,
            gender: "Male",
            height: 175
        }
    }

    response.send(data)
})


app.get("/getPincodes/", async function (request, response) {
    let result = await fetch(`https://api.postalpincode.in/pincode/${request.params.pincode}`)
    let responseJson = await result.json()

    response.send(responseJson)
})

app.listen(3000)

