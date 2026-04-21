// You have been assigned to develop a user feedback form for a website using Express.js and cookies. 

// Implement the following requirements:

// Create a form with the following fields:

// Name (input field)

// Email (input field)

// Message (textarea field)

// Rating (radio buttons: Bad, Average, Good, Very Good, Excellent)

// When the user submits the form, store their feedback information (name, email, message, and rating) in a cookie named "feedback" that expires in 10 seconds.

// Display a confirmation message to the user after successfully submitting the form & Create a link to display the feedback details stored in the "feedback" cookie. 

// When the user click to the link, retrieve the feedback information from the cookie and display it on the page also include a link on the feedback details page to Logout.

// When the user clicks the link, user redirected to home page.
var express=require("express")
var app=express()
cp=require("cookie-parser")
app.use(cp())
app.use(express.static('../public',{index:'form4.html'}))
app.use(express.urlencoded({extended:true}))
app.post('/htmlform',(req,res)=>{
const name=req.body.name
const email=req.body.email
const msg=req.body.msg
const rating=req.body.rating
  const fb={name,email,msg,rating}
  res.cookie('feedback',fb,{maxAge:10000})
  res.send(`<h1>Thank you for feedback</h1>
    <a href='/show-fb'>Show Feedback</a>`)
})
app.get('/show-fb',(req,res)=>{
    data=req.cookies.feedback
    if(data){
        res.send(`Name:${data.name}
            Email:${data.email}
          Msg:${data.msg}
          Rating:${data.rating}  `)
    }
    else{
        res.send('No data found')
    }
})
app.listen(5070)