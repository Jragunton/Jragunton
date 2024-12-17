// taskCalendar.js

// Prompt the user to enter a day of the week
let dayOfWeek = prompt("Enter a day of the week:");

// Use a switch statement to map the day to a specific task
switch (dayOfWeek.toLowerCase()) {
  case "monday":
    console.log("Your task for Monday is: Attending DSA class 10:30 to 12:00 AM.");
    break;
  case "tuesday":
    console.log("Your task for Tuesday is: Attending DSA class 8:00 to 9:00 AM.");
    break;
  case "wednesday":
    console.log("Your task for Wednesday is: Finish your school works .");
    break;
  case "thursday":
    console.log("Your task for Thursday is: Attending DSA class 10:30 to 12:00 AM.");
    break;
  case "friday":
    console.log("Your task for Friday is: Attending DSA class 8:00 to 9:00 AM.");
    break;
  case "saturday":
    console.log("Your task for Saturday is: Relax and recharge.");
    break;
  case "sunday":
    console.log("Your task for Sunday is: Going to church.");
    break;
  default:
    console.log("Invalid day. Please enter a valid day of the week.");
}
