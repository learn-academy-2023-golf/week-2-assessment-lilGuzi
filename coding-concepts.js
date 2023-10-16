// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------1) What will this log?

const cohort = "Golf 2023"
//  console.log(cohort.split(" "))

// a) Your answer: ["Golf", "2023"]
// b) Verify and explain: my answer was correct, the two words were split to two elements within the array

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: this will return "Hello LEARN Student"
// b) Verify and explain: my answer was wrong, it returned undefined. this is because ${} is used to add expressions and in this case "LEARN Student is not an expression but instead just a string.

// --------------------3) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: this will return an array with only the odd numbers. [11, 13, 15]
// b) Verify and explain:my answer was correct as .filter is used to iterate through an array and return a subset of the original array that satisfies the given evaluation. 

// --------------------4) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: this will log "JavaScript"
// b) Verify and explain: my answer was correct, in the console.log command the myCodingSkills object is being called on and inside the object the languages key is being called on and index 0 is being called on which is "JavaScript"

// --------------------5) What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Golf"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: will log "George Golf 2023"
// b) Verify and explain:my answer was wrong, this will log the key and the value 
