var url=require('url')
var addr="http://localhost:8080/data?month='March'&Year=2026#WarUpdate"
var d=url.parse(addr,true)
leap=d.query.Year
if((leap%4==0 || leap%400==0) &&(leap%100!==0)){
    console.log("Leap year")
}
else{
    console.log("Not a leap year")
}