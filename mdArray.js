// Prompt user for names and ages and store them as strings
let name= prompt("Enter names  (Genevieve, Juan, Luna, Gabriel, Elise)");
let age= prompt("Enter ages  (24, 65, 21, 5, 9)");

// Convert the names and ages to arrays and trim any extra spaces
let names = namesInput.split(',').map(name => name.trim());
let ages = agesInput.split(',').map(age => parseInt(age.trim(), 10));

// Check if both arrays have the same length
if (names.length !== ages.length) {
    console.log("The number of names and ages must match.");
} else {
    // Create a new multi-dimensional array where each sub-array contains [name, age]
    let restructuredArray = names.map((name, index) => [name, ages[index]]);

    // Log each pair [name, age] on a new line
    restructuredArray.forEach(pair => {
        console.log(pair);
    });
}



























