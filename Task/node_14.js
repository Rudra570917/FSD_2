var path=require('path')
a=path.dirname('D:\Rudra_Sem4\shape.txt')
console.log(a)
b=path.basename('D:\Rudra_Sem4\shape.txt')
console.log(b)
c=path.extname('D:\Rudra_Sem4\shape.txt')
console.log(c)
d=path.parse('D:\Rudra_Sem4\shape.txt')
console.log(d)
if(d.ext=='.txt'){
    console.log("Text File")
}
else{
    console.log("Not a text file")
}