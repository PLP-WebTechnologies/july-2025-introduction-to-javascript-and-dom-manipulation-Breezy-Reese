// ==========================
// Part 1: Variables & Conditionals
// ==========================
document.getElementById("checkNumberBtn").addEventListener("click", function() {
  let userNum = parseInt(document.getElementById("userNumber").value);

  if (isNaN(userNum)) {
    document.getElementById("numberResult").textContent = "Please enter a valid number!";
  } else if (userNum > 0) {
    document.getElementById("numberResult").textContent = "The number is positive.";
  } else if (userNum < 0) {
    document.getElementById("numberResult").textContent = "The number is negative.";
  } else {
    document.getElementById("numberResult").textContent = "The number is zero.";
  }
});

// ==========================
// Part 2: Functions
// ==========================

// Function 1: Greet the user
function greetUser(name) {
  return `Hello, ${name}! Welcome to JavaScript.`;
}

document.getElementById("greetBtn").addEventListener("click", function() {
  let greeting = greetUser("Basil");
  document.getElementById("greetResult").textContent = greeting;
});

// Function 2: Sum of two numbers
function sumNumbers(a, b) {
  return a + b;
}

console.log("Sum of 5 + 3 is:", sumNumbers(5, 3));

// ==========================
// Part 3: Loops
// ==========================

// Example 1: For loop
document.getElementById("loopBtn").addEventListener("click", function() {
  let list = document.getElementById("numberList");
  list.innerHTML = ""; // clear previous
  for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    li.textContent = `Number ${i}`;
    list.appendChild(li);
  }
});

// Example 2: While loop
let counter = 1;
while (counter <= 3) {
  console.log(`While loop iteration: ${counter}`);
  counter++;
}

// ==========================
// Part 4: DOM Manipulation
// ==========================

// DOM Interaction 1: Toggle background color
document.getElementById("toggleBtn").addEventListener("click", function() {
  document.body.style.backgroundColor = document.body.style.backgroundColor === "lightblue" ? "white" : "lightblue";
});

// DOM Interaction 2: Change text content
document.getElementById("toggleBtn").addEventListener("dblclick", function() {
  document.getElementById("dynamicText").textContent = "You double-clicked me!";
});

// DOM Interaction 3: Add new element
document.getElementById("addElementBtn").addEventListener("click", function() {
  let newDiv = document.createElement("div");
  newDiv.textContent = "I am a new element!";
  document.getElementById("newElements").appendChild(newDiv);
});
