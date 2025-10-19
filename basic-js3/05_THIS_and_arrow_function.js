const user = {
    username: "akash",
    age:"99",
    
    welcomemessage: function()
    {
        console.log(`${this.username}, welcome to the website`)
        console.log(this)
    }
}
// user.welcomemessage()
// user.username = "rohit"
// user.welcomemessage()

// function chai()
// {
//     username: " hitesh "
//     console.log(this)
// }
// chai()

// const chai = function chai()
// {
//     let username = " hitesh "
//     console.log(this.username);
// }
// chai()

// const chai = () => 
// {
//     let username = " hitesh "
//     console.log(this.username);
// }
// chai()

// const addtwo = (num1, num2) =>{
//     return num1 + num2
// }
// console.log(addtwo(2,4))

// const addtwo = (num1, num2) => (num1 + num2)
// console.log(addtwo(2,4))

const addtwo = (num1, num2) => ({username:"akash"})
console.log(addtwo(2,4))