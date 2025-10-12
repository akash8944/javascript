// const tinderuser = new Object()

// const { use } = require("react")

const tinderuser = {}

tinderuser.id = "123abc"
tinderuser.name = "akash"
tinderuser.isLoggedIn = false
// console.log(tinderuser)

const regularuser = {
    email: "akash@gmail.com",
    fullname:{
        userfullname:{
            firstname: " akash",
            lastname: "soni"
        }
    }
}
// console.log(regularuser.fullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "b"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1,...obj2}

// console.log(obj3)

const user = [
    {
        id: 1,
        email:"akash@gmail.com",
    },
    {
        id: 1,
        email:"akash@gmail.com",
    },
    {
        id: 1,
        email:"akash@gmail.com",
    },
]
// console.log(user[1].email);
// console.log(tinderuser);
// console.log(Object.values(tinderuser));
// console.log(tinderuser.hasOwnProperty('name'));

/******************** obj destructure *****************/
const course = {
    coursename: "js in hindi",
    price: "999",
    couseInstructor:"akash",

}
// course.couseInstructor
const {couseInstructor: instructor} = course
// console.log(couseInstructor);
console.log(instructor)

// {
//     "myname":"hitesh",
//     "coursename":"js in hindi",
//     "price":"999",
// }

[
    {},
    {},
    {},
]