function calculatecartprice(val1, val2, ...num1)
{
  return num1
}
console.log(calculatecartprice(2,3,4,5))

const user ={
    username:"akash",
    price:99,
}
function handleobject(anyobject)
{
    console.log(` username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleobject(user)

handleobject(
{
    username:"mohit",
    price:"999"
})

const myarray = [200, 300, 400,500]
function returnsecondvalue(getarray)
{
    return getarray[2]
}
console.log(returnsecondvalue(myarray))