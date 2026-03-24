var e=require('events')
var ee=new e()
fun=()=>{
    console.log("Hello")
}
fun2=()=>{
    console.log("Hi")
}
ee.on("conn",fun)
ee.on("conn",fun2)
let c=ee.listenerCount("conn")
console.log(c)
ee.emit("conn")
ee.removeListener("conn",fun)
let d=ee.listenerCount('conn')
console.log(d)
ee.emit('conn')