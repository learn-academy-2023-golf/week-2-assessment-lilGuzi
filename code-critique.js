// ASSESSMENT 2: Coding Critique with AI

// Enter the following prompt into ChatGPT or similar AI tool.

// Prompt: Create a function that takes in a string and logs the index of the first vowel.

// Copy and paste the code output here.

function firstVowelIndex(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i].toLowerCase())) {
            console.log(`Index of first vowel: ${i}`);
            return i;
        }
    }
    console.log('No vowels found in the string.');
    return -1; // Return -1 if no vowel is found in the string
}

// Example usage:
const testString = "Hello World";
firstVowelIndex(testString);

// Critique the code output. 
// Things to consider in your critique: Were you surprised by the output? Was the output what you expected? Is the correct output being rendered? What do you like about the code? What do you dislike? Are there best practices that are not being followed? Would you take a different approach? What did you learn? 

// chatGPT was able to produce a code that logged the index of the first vowel in the string "Hello World", what i like about this code is that it took into account that that first letter might be a vowel and it might be capitalized which is why it included the .toLowerCase when evaluating is the letter was a vowel. i also like how after chatGPT gave me this code i asked it to reformat it and it returned the same code which i took as this is the simplist way to code this. another thing i liked is that it even included a return for when there is no vowel. what i dont get it why it will return -1 if no vowel is found in the string, i tested it and it will return "no vowels found in the string" which confuses me as to what the -1 does. overall i learned that AI it a lot smarter than i was aware of and might take over my future career someday. 