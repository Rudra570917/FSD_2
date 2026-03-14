// Write a Nodejs script to take "0 1 -9 20 33 -44 50" elements separated by white space in .txt file. Print sorted array of these 5 elements on Node Js server.
var fs=require('fs')
fs.writeFileSync("element.txt","0 1 -9 20 33 -44 50")
data=fs.readFileSync("element.txt","utf-8")
d=data.split(" ").sort()
da=d.map(Number)
console.log(da)