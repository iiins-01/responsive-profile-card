<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
  
  //  JAVASCRIPT CONDITIONAL STATEMENTS NOTES

// IF STATEMENT
// Executes a block of code if a specified condition is true.

if (condition) {
  // block of code to be executed if the condition is true
}

//ELSE STATEMENT
// Executes a block of code if the same condition is false.
if (condition) {
  // block of code to be executed if the condition is true
} else {
  // block of code to be executed if the condition is false
}

//ELSE IF STATEMENT
// Use this to specify a new condition if the first condition is false.
if (condition1) {
  // block of code to be executed if condition1 is true
} else if (condition2) {
  // block of code to be executed if condition1 is false and condition2 is true
} else {
  // block of code to be executed if both condition1 and condition2 are false
}

//SWITCH STATEMENT
// Used to perform different actions based on different conditions (good for multiple fixed values).
switch(expression) {
  case x:
    // code block
    break; // Stops the execution of more code inside the block
  case y:
    // code block
    break;
  default:
    // code block executed if no cases match
}

//TERNARY OPERATOR (Short-hand If...Else)
// Syntax: variablename = (condition) ? valueIfTrue : valueIfFalse;
let access = (age > 18) ? "Allowed" : "Denied";

//LOGICAL OPERATORS (Used within conditions)
// && (Logical AND): True if both statements are true.
// || (Logical OR): True if at least one statement is true.
// !  (Logical NOT): Reverses the result (True becomes False).

/*
   TIP: Use 'Switch' when comparing the same variable to many specific values.
   Use 'If...Else' for complex logical comparisons or ranges.
*/
    </script>
    
</body>
</html>