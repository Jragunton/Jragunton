// Node class to represent each node in the linked list
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// LinkedList class to manage the linked list
class LinkedList {
    constructor() {
        this.head = null;
    }

    // Append a new node to the linked list
    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode; // If the list is empty, set head to the new node
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next; // Traverse to the last node
            }
            current.next = newNode; // Add the new node to the end
        }
    }

    // Print the list
    print() {
        let current = this.head;
        let result = [];
        while (current) {
            result.push(current.value);
            current = current.next; // Move to the next node
        }
        console.log(result.join(" -> "));
    }
}

// Create a linked list
const list = new LinkedList();

// Append the items
list.append("Data Structures - Array");
list.append("Variable Type-Integer");
list.append("Sorting Algorithm-Bubble Sort");

// Print the linked list
list.print();
