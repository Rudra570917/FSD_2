// Defining an array of object with properties name and age. Write this object in a file named student.txt then read the file and display the object on console. 
var fs=require('fs')
var data=[{"name":"Rudra","age":21},{"name":"Dev Patel","age":20}]
fs.writeFileSync("student.txt",JSON.stringify(data))
a=fs.readFileSync("student.txt","utf-8")
a1=JSON.parse(a)
console.log(a1[0].name)
console.log(a1[1].name)
console.log(a1[1].age)
