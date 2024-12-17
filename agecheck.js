// Prompt the user to enter their age
let age = prompt("Enter your age:");

// Determine the user's age group and log the message
if (age < 13) {
    console.log("You are a child.");
} else if (age >= 13 && age <= 19) {
    console.log("You are a teenager.");
} else {
    console.log("You are an adult.");
}
