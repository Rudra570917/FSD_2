// Write an Express.js application to perform the following tasks:

// 1) Create an EJS file named contact.ejs that displays a heading "Contact Form" and contains a form with:
//             	-Text input for Name
//             	-Email input for Email
//             	-Submit button
// 2) Render this EJS file on the /contact route.
// 3) Handle form submission using the POST method on the /submit route.
// 4) After form submission, display a message on the browser in the format:
// "Thank you (Name), we have received your email (Email)."
var express=require("express")
var app=express()
app.use(express.urlencoded())
app.set("view engine","ejs")
app.get('/',(req,res)=>{
    res.render('contact')
})
app.post('/contact',(req,res)=>{
    username=req.body.username
    email=req.body.email
    res.render('c1',{username,email})
})
app.listen(5662,()=>{
    console.log("Server")
})