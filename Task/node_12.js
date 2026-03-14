// Create JSON object which contains array of objects. Calculate perimeter of square and perimeter of circle by using side value and diameter value respectively. And object as well as calculated  data in shape.txt	
// const shape=[{name:"circle",diameter:8},{name:"square",side:10}]

var fs=require('fs')
const shape=[{name:"circle",diameter:8},{name:"square",side:10}]
fs.writeFileSync('shape.txt',JSON.stringify(shape))
a=fs.readFileSync("shape.txt","utf-8")
a1=JSON.parse(a)
per_square=a1[1].side*a1[1].side
per_circle=2*Math.PI*a1[0].diameter/2
console.log(per_square)
console.log(per_circle)
fs.appendFileSync('shape.txt',JSON.stringify(per_square))
fs.appendFileSync('shape.txt',JSON.stringify(per_circle))


