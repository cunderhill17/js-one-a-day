// Problem: Finding a User by Email
// You’re building a small feature for a website where users can log in.
// You have an array of registered users, and when someone enters their email, you need to find the user object that matches that email.

const users = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", isActive: true },
  { id: 2, name: "Brian Smith", email: "brian@example.com", isActive: false },
  { id: 3, name: "Carla Gomez", email: "carla@example.com", isActive: true },
  { id: 4, name: "David Lee", email: "david@example.com", isActive: true }
];

let userInput = 'carla@example.com';

const getUserByEmail = n => {
    return n.email === userInput;
};

const loggedIn = users.find(getUserByEmail);

console.log(loggedIn);


//Optional Next Steps 
// 1. Make the function resusable by passing the email as a parameter
// 2. You could also check if the user is currently active 