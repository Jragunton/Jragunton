// Create an empty array to represent the stack
let groceryStack = [];

// Function to check if the stack is empty (peek function)
function peek() {
  if (groceryStack.length === 0) {
    console.log("The stack is empty.");
    return null;
  } else {
    console.log("The stack is not empty. Current top item: " + groceryStack[groceryStack.length - 1]);
    return groceryStack[groceryStack.length - 1];
  }
}

// Function to add an item to the stack (push function)
function push(item) {
  // Add the item to the stack
  groceryStack.push(item);
  console.log("Item added: " + item);
  // Peek after pushing to show current stack state
  peek();
}

// Function to remove the last item from the stack (pop function)
function pop() {
  if (groceryStack.length === 0) {
    console.log("There are no items to pop.");
  } else {
    const removedItem = groceryStack.pop();
    console.log("Item removed: " + removedItem);
  }
  // Peek after popping to show current stack state
  peek();
}

// Get grocery items from the user input (5 items)
for (let i = 0; i < 5; i++) {
  let item = prompt(`Enter grocery item #${i + 1}:`);
  push(item);
}

// Demonstrate the pop function by removing 2 items
console.log("Popping two items:");
pop();
pop();
