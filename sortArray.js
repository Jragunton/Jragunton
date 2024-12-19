// Create two arrays
let numbers = [24, 65, 21, 5, 9, 32, 42, 80, 57];
let names = ['Zenvo', 'Erica', 'Jordie', 'Alicia', 'Redon'];

// Merge both arrays into a single array
let mergedArray = [...numbers, ...names];  // Using the spread operator to merge arrays

// Log the merged array to the console
console.log('Merged Array:', mergedArray);

// Sort numbers in reverse numerical order
let sortedNumbers = numbers.sort((a, b) => b - a); // Sort numerically in descending order

// Log the sorted numbers in reverse order
console.log('Numbers Sorted in Reverse:', sortedNumbers);

// Sort names alphabetically
let sortedNames = names.sort(); // Sort strings alphabetically by default

// Log the sorted names alphabetically
console.log('Names Sorted Alphabetically:', sortedNames);
