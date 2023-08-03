const x = +prompt("first number")
const y= +prompt("second number")
let z=x+y
let b=x*y
let sum= document.getElementById("sum")
let multi= document.getElementById("multi")
let odd= document.getElementById("odd")
let oddarray = []
function code1(x,y,z,b){
sum.innerHTML = x+"+"+y+"="+z
multi.innerHTML = x+"*"+y+"="+b


}
code1(x,y,z,b)

mod= 10%2
console.log(mod)

function code2(z,b,oddarray){
    if(z%2 == 0){
        z+= 1}
    for(let i=z ; i<=b; i+=2){
     oddarray.push(i)
    }
   
    console.log(oddarray)
    odd.innerHTML= oddarray
}
code2(z,b,oddarray)