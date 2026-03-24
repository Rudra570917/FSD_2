var url=require('url')
var fs=require('fs')
var addr="http://localhost:8080/data?T1=25&T2=23&T3=24"
process.noDeprecation=true
var d=url.parse(addr,true)
T1=parseInt(d.query.T1)
T2=parseInt(d.query.T2)
T3=parseInt(d.query.T3)
avg=(T1+T2+T3)/3
console.log(avg)
//fs.writeFileSync('avg.txt',JSON.stringify(avg))
