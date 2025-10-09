// singlton
//object create

//object literals

const mysym = Symbol("key1")

const jsuser = {
    name:"hittesh",
    [mysym]: "mykey1",
    "full name" : "akash soni",
    age: 18,
    location:"jaipur",
    email:"akash8923@gmail.com",
    isLoggedIn : false,
    Lastlogindays :["monday", " tuesday"]

}
// console.log(jsuser.email)
// console.log(jsuser["email"])
// console.log(jsuser["full name"])
// // console.log(jsuser[mysym])

jsuser.email = "akash@0692.com"
// Object.freeze(jsuser)
jsuser.email = "akash@soni"
// console.log(jsuser)

jsuser.greeting = function(){
    console.log("akash is soni")

jsuser.greetingtwo = function(){
    console.log(`akash is soni${this.name}`)
}
}

console.log(jsuser.greeting());
console.log(jsuser.greetingtwo());