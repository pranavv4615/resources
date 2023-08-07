const fs = require('fs')

const filePath = 'fileTest.txt'

const file_data = []

const data = fs.readFileSync(filePath, {encoding: 'utf-8'})
file_data.push(data)
// fs.readFile(filePath, {encoding: 'utf-8'}, function (err, data) {
//     file_data.push(data)
// })

if(file_data.length != 0){
    console.log("yes, i got the data")
}else{
    console.log("No data is not there")
}



