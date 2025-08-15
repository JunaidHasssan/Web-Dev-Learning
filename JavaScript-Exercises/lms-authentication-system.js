let userRole = "principal";
let accessLevel;

// Else If

if (userRole === "principal") {
  accessLevel = "Full access is granted";
} 
else if (userRole === "teacher") {
  accessLevel = "Curriculum access is granted";
} 
else if (userRole === "student") {
  accessLevel = "Learning access is granted";
}
else{
    accessLevel = "No access is granted"
}

console.log("Access level: " + accessLevel);

// Else If "inside" Nested If

let isLoggedIn = true
let userMessage

if (isLoggedIn) {

    if (userRole === "principal") {
        userMessage = "Welcome! Sir"
        
    }
    else{
        userMessage = "Welcome! User"
    }
    
}

else{
    userMessage = "Please log in"
}

console.log("User Message: " + userMessage);

// Switch Statement


let userCatagory

switch (userRole) {
    case "principal":
        userCatagory = "Administrator"
        break;
    
    case "teacher":
        userCatagory = "Staff"
        break;    

    case "student":
        userCatagory = "Learner"
        break;    

    default:
        userCatagory = "Unknown"
        break;
}

console.log("User Catagory: " + userCatagory);

// Authentication


let isAuthenticated = ["student", "principal", "teacher"].includes(userRole)
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";
    

console.log(authenticationStatus);
