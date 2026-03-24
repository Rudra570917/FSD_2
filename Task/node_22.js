// Write node js script to handle events as asked below.

// 1) Check the radius is negative or not. If negative then display message “Radius” must be positive” else calculate the perimeter of circle. 

// 2) Check side is negative or not. If negative then display message “Side must be positive” else calculate the perimeter of square. 
var e=require("events")
var ee=new e()
ee.on("circle",(radius)=>{
    if(radius<0){
        console.log("Radius must be positive")
    }
    else{
        var a=2*Math.PI*radius;
        console.log(a)
    }
})
ee.on("square",(side)=>{
    if(side<0){
        console.log("Side must be positive")
    }
    else{
        var s=side*side
        console.log(s)
    }
})
ee.emit("circle",10)
ee.emit("square",5)