/*
// RECAP FROM YESTERDAY
// operator precedence
// why JavaScript knows what evaluate first without us using parentheses
// we had a look at the operator precendence table at mozilla dev MDN you can find the link in resources

// template literals 
const firstName = "Helena";
console.log(`My name is ${firstName}`);

// if statement
const age = 19;
const isOfAge = age >= 18;

if (isOfAge) {
    console.log("YAY! You can take your drivers license!!!");
} else {
    console.log("Sorry come back in a few years!");
} 

// type coersion och conversion
console.log('23' - '10' - 3); // COERSION
console.log('23' + '10' + 3); // NO COERSION

// truthy & falsy values
// 5 falsy values: 0, '', undefined, NaN, null

let height = 0;
if (height) {
    console.log("YAY! it's defined");
} else {
    console.log("height is undefined");
}

// equality operator
// === & == 
const age = 18;
if (age === 18)console.log("You just became an adult!");


// AND & OR OPERATOR
// A & B example ffrom yesterdays theory but in prctice now

//console.log(hasDriversLicense && hasGoodVision);
// && = and

//console.log(hasDriversLicense || hasGoodVision); 
// || = or

//console.log(!hasDriversLicense);
//console.log(!hasDriversLicense && !hasGoodVision);
const hasDriversLicense = true;
const hasGoodVision = true;
const isTired = true;

if (hasGoodVision && hasDriversLicense) {
    console.log("You are able to drive!");
} else {
    console.log("Someone else should driver...");
}
// this will return true since both conditions are true

if (hasGoodVision && hasDriversLicense && !isTired) {
    console.log("You are able to drive!");
} else {
    console.log("Someone else should driver...");
}
// this will return false since the not operator inverts the value
// and by using && operator all of the conditions must be true for the statement to return true
// by using || (or operator) only one condition needs to be true and it ony returns false if all 
// conditions are false

// SWITCH STATEMENT

const day = "monday";
// hardcoded in this example, in real world this would not be hardcoded

switch (day) {
  case "monday": // day === 'monday' notice the : its not ;
    console.log("Plan course structure");
    break;
  case "tuesday":
    console.log("Prepare theory lessons");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Give the students feedback");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend! :D");
    break;
  default:
    console.log("Not a valid day");
}

// switch need a condition in this example its day
// then we use case for each value we want to compare to the value of day
// here we are using strict equality comparison. 
// notice that after case we use : not semicolon
// after the colon we write what we want our code to execute if the value is equal to day
// to end the case we use break. This is to tell JavaScript to stop executing the code once 
// it has found the exact same value as day. If we dont use break the code will continue to execute
// the next line - try this and see what happens!
// we need to end our switch with default, this wil execute if none of the cases is exact the same as day

// STATEMENTS & EXPRESSION

// EXPRESSION
// an expression is a smaller piece of code that produces a value

3 + 4 // expression
1992 // also an expression
true && false && !false // also expression because it produces a boolean value

// STATEMENT
// statement is like a bigger piece of code which does not produce a value by itself

// you can think of expression and statement like this:
// statement is like a complete sentence and expressions are the words that builds the sentence

if (23 > 10) {
    const str = "23 is bigger";
    // if is a statement it preforms an actions in our code
    // the string "23 is bigger" is the expression
}

console.log(`I'm ${2020 - 1985} years old`);
// we can write expressions in template literals

//console.log(`I'm ${2020 - 1985} years old ${if 23 > 10 { const str = '23 is bigger'}}`);
// we can not write statements in template literals

const me = "Helena";

console.log(`I'm ${2020 - 1985} years old ${me}`);

// its ok not to understand all this at the moment, but it is important to understand the difference
// between expressions and statements as we progress further in this course

// THE CONDITIONAL OPERATOR = TERNARY

// we have used 2 ways of writing conditionals (if/else & switch) but there is another way TERNARY
// Ternary lets us write it all in one line

const age = 18;

if (age >= 18) {
  console.log("You are allowed to drink a beer");
} else {
    console.log("You can drink water instead");
}

age >= 18 ? console.log("You are allowed to drink a beer") : console.log("You can drink water instead");
// this is the exact same as in the if statement above

// Ternary operator is built with three parts: condition, if part and else part

const drink = age >= 18 ? 'beer' : 'water';
console.log(drink);
// Ternary can only evaluate one condition and return either true or false
// so in the example above the turnery operator is evaluating if age is higher or the same as 18
// if its true it will execute the code after the ?
// if not it will execute the code after :

console.log(`I like to drink ${age >= 18 ? 'beer' : 'water'}`);
// we can actullay write the code above a little bit cleaner like this
// and this line of code is exactly the same as the if statement below!
// but much easer to read and much easier to write :D

let drink2;
if (age >= 18) {
    drink2 = 'beer';
} else {
    drink2 = 'water';
}
console.log(drink2);

// BE AWARE that turnery operator does NOT replace if statement
// but if you want to evaluate something fast and only want a true or false return turnery is 
// the best way to go

*/
                                                        