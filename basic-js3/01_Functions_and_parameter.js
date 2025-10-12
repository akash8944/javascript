function myname()
{
    // console.log("a")
    // console.log("b")
    // console.log("c")
    // console.log("d")

}

// myname()

// function addnumber(num1, num2)
// {
//     console.log(num1 + num2)
// }
function addnumber(num1, num2)
{
    // let result = num1 + num2
    // return result

    return num1 + num2
}

const result = addnumber(2,3)
// console.log("result:", result)

function loginuser(username = "sam"){
if(username === undefined){
  console.log( " please enter the name")
    return
}
return `${username} is loged in`
}
console.log(loginuser("akash"))
