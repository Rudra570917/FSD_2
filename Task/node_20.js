// Write a Node.js program using the events module to simulate a sequence of events: 

// When a "connection" event occurs, print "Connection successfully" and trigger a "data-received" event.

// When the "data-received" event occurs, print "Data received successfully".

// Finally, print "Thanks" at the end of execution.
var e=require("events")
var ee=new e()
connection=()=>{
    console.log("Connection Successfully")
}
data=()=>{
    console.log("Data-received")
}
ee.on("conn",connection)
ee.emit("conn")
ee.removeListener("conn",connection)
ee.on("conn1",data)
ee.emit("conn1")
console.log("Thank you")