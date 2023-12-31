// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// If you get stuck, leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

// const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
// const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// Pseudo code:

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

// describe("divByThree", () => {
//     it('logs variable is divisible by three',() =>{
//     const object1 = { number: 15 }
//     // Expected output: "15 is divisible by three"
//     const object2 = { number: 0 }
//     // Expected output: "0 is divisible by three"
//     const object3 = { number: -7 }
//     // Expected output: "-7 is not divisible by three"
//     expect(divByThree(object1.number)).toEqual("15 is divisible by three");
//     expect(divByThree(object2.number)).toEqual("0 is divisible by three");
//     expect(divByThree(object3.number)).toEqual("-7 is not divisible by three");
// })
// })

// b) Create the function that makes the test pass.

// Pseudo code:
//declare a function called divByThree
//parameter is the object
// use if/else to evaluate if the number is divisible by 3 
//return result

// const divByThree = (object) => {
//     if(object % 3 === 0){
//    return `${object} is divisible by three`
//     } else if (object % 3 !== 0) {
//         return`${object} is not divisible by three`
//     }
// } 
// console.log(divByThree())

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

describe("caps", () => {
    const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
    // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
    const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
    // Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]
      it("takes in an array of words and returns an array with all the words capitalized", () => {
        expect(caps(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
      })
    })

// b) Create the function that makes the test pass.

// Pseudo code:
//declare a function called caps
//parameter is the array
// access each value using .map
//use.toUpperCase to capitalize the first letter and then connect the remainder of the word
//return result

const caps = (array) => {
    return array.map((value) => {
        return value[0].toUpperCase() + value.substring(1)
    })
}