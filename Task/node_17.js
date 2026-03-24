var e=require('events')
var ee=new e()
fun=()=>{
    console.log("Hello")
}
fun2=()=>{
    console.log("Hi")
}
ee.on("a",fun)
ee.on("b",fun2)
ee.emit("b")
ee.emit("a")
