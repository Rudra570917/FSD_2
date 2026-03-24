var e=require('events')
var ee=new e()
ee.addListener("status",(code,msg)=>{
    console.log(`Your status code is ${code} with ${msg} message`)
})
ee.emit('status',200,"ok")