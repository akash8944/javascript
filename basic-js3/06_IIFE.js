// Immediately Invoked Function Expressions

// (function chai() // named iife
// {
//     console.log(`db connected`)
// })()

// (() => {
//     console.log("db conected 2")
// })();

((name) => {
    console.log(`db conected 2 ${name}`)
})('akash')