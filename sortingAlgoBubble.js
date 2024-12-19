// sortingAlgoBubble.js

// Function to add numbers to an array using prompt() and push()
function getNumbers() {
  let numbers = [];
  // Populate the array with 10 numbers
  for (let i = 0; i < 10; i++) {
    let num = parseInt(prompt("Enter a number: "));
    numbers.push(num);
  }
  return numbers;
}

// Bubble Sort implementation
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      console.log(`Comparing ${arr[j]} and ${arr[j + 1]}`);
      if (arr[j] > arr[j + 1]) {
        // Swap the numbers
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        console.log(`Swapping ${arr[j]} and ${arr[j + 1]}`);
      }
    }
  }
  return arr;
}

// Main code
let numbers = getNumbers(); // Get the array from user
console.log("Original array:", numbers);

let sortedArray = bubbleSort(numbers); // Sort the array
console.log("Sorted array:", sortedArray);
