// Write node js script and json to perform below tasks. 

// 1.	Write below object in txt file named input.txt  

// {data:{a:15,b:20,c:[40,30]}}

// 2.	Read data from the same file and perform the below tasks.

// a.	addition of a and b.

// b.	subtraction of 2nd element of c and b. (Must be positive value)

// c.	multiplication of elements of c.

// 3.	Add the Output of addition, subtraction and multiplication below the object in output.txt file.
var fs=require('fs')
var data={data:{a:15,b:20,c:[40,30]}}
fs.writeFileSync('input.txt',JSON.stringify(data))
d=fs.readFileSync('input.txt','utf-8')
d1=JSON.parse(d)
console.log(d1.data.a+d1.data.b)
console.log(d1.data.c[0]-d1.data.c[1])
console.log(d1.data.c[0]*d1.data.c[1])
ans_1=d1.data.a+d1.data.b
ans_2=d1.data.c[0]-d1.data.c[1]
ans_3=d1.data.c[0]*d1.data.c[1]
fs.writeFileSync('output.txt',"Ans1 is"+ans_1)
fs.appendFileSync('output.txt',"\n Ans2 is"+ans_2)
fs.appendFileSync('output.txt',"\n Ans 3 is"+ans_3)





