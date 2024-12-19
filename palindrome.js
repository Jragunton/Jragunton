// Step 1: Declare two variables with words
let word1 = prompt("Enter the first word:");
let word2 = prompt("Enter the second word:");

// Step 2: Reverse the strings
let reversedWord1 = word1.split('').reverse().join('');
let reversedWord2 = word2.split('').reverse().join('');

// Step 3: Log the original and reversed strings
console.log(word1, reversedWord1);
console.log(word2, reversedWord2);

// Step 4: Log if the original string is a palindrome
console.log(word1 === reversedWord1);
console.log(word2 === reversedWord2);
