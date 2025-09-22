const score = 100;
const scorevalue = 100.3;
const isLoggedIn = false;
const outsidetemp = null;
let useremail;
const id = Symbol('123');
const anthorId = Symbol('123');
console.log(id === anthorId); // false होगा

const bigNumber = 34567865467n;
// console.log(typeof bigNumber); // bigint

const heros = ["shaktiman", "nagraj", "dogo"];
let myobj = {
    name: "akash",
    age: 22
};
const myfunction = function() {
    console.log("hello world1");
};

myfunction(); // यह "hello world1" प्रिंट करेगा
console.log(typeof outsidetemp)