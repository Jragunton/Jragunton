// Initial Queue with 5 Customers to be serviced
let customer = ['Elaine', 'Althea', 'Angelo', 'Lito', 'Engelbert'];

function displayQ() {
    console.log("Updated Queue:");
    customer.forEach((customer, index) => {
        console.log(`${index + 1}. ${customer}`);
    });
}

function queueingSystem() {
    console.log("Welcome to the Customer Service Queueing System!");
    displayQ();

    // user can do only these actions involved 
    while (true) {
        const action = prompt("Choose an action, Enter 'add' to add a customer, 'serve' to serve a customer, or 'exit' to quit.").toLowerCase();
        // if user choose to add customer 
        if (action === 'add') {
            // then user will enter a name of a new customer to be added
            const customerName = prompt("Enter the name of the customer:");
            // system will display the added customer name with the line number 
            if (customerName) {
                customer.push(customerName);
                alert(`${customerName} has been added to the queue with number ${customer.length}.`);
                displayQ();            
            } else {
                alert("Oops! Invalid entered name. Please try again.");
            }
        // if user choose to serve the customer
        } else if (action === 'serve') {
            // if the user already served the all customers 
            if (customer.length === 0) {
                alert("The queue is empty. No customers to serve.");
            // Entered number will reveal the name of the customer in queue, then afterwards, removes it in the queue.
            } else {
                const numberToServe = parseInt(prompt("Enter the number of the customer to serve:"), 10);
                if (numberToServe > 0 && numberToServe <= customer.length) {
                    const servedCustomer = customer.splice(numberToServe - 1, 1)[0];
                    alert(`Serving customer: ${servedCustomer}`);
                    displayQ();
                // when entered invalid number
                } else {
                    alert("Invalid number. Please try again.");
                }
            }
            // when user choose the exit action, the queue will be terminated 
        } else if (action === 'exit') {
            alert("Exiting the system. Goodbye!");
            break;
            // when user entered invalid action
        } else {
            alert("Invalid action. Please enter only 'add', 'serve', or 'exit'.");
        }
    }
}

queueingSystem();
