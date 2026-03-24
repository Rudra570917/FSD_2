var EventEmitter=require('events')
var e=new EventEmitter()
e.on('sayname',()=>{
    console.log("My name is Rudra")
})
e.emit('sayname')
e.on('sayname',()=>{
    console.log("Hello")
})
e.emit('sayname')