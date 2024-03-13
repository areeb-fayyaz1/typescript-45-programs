/* Question # 24: More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to 
try more comparisons, write more tests. Have at least one True and one False result */

//Equality with strings
console.log("Testing equality with strings:")
console.log("apple" == "apple") //true
console.log("apple" == "Apple") //false

//using lower case funtion
console.log("Testing the lower case funtion:")
console.log("Apple".toLowerCase() == "apple") //true

//Numerical Test
console.log("Numerical test:")
console.log(10>5) //true
console.log(2<1) //false

//Test using "and" & "or" operators
console.log("Test using 'and' & 'or' operators")
console.log(true&&false) //false
console.log(true , false) //true

// Test whether an item is in a array
let fruits=["apple", "banana", "cherry"]
console.log("Is 'apple' in fruits?")
console.log(fruits.includes("apple")) //true

// Test whether an item is not in a array
console.log("Is 'mango' not in fruits?")
console.log(!fruits.includes("mango")) //true