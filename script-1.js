/**
 * 
 * Q1. Write a program to find all pairs of an integer array whose sum is equal to a given number?
]
 */var arr = [1, 2, 4, 5, 2, 6, 8, 8, 10, 10, 10, 2];
var num = 7;
var newArray = [];

for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) { // Start j from i + 1 to avoid duplicate pairs
        if (arr[i] + arr[j] === num) {
            newArray.push([arr[i], arr[j]]);
        }
    }
}

console.log(newArray);


/**
 * Q2. Write a program to reverse an array in place? In place means you cannot create a new array. You have to update the original array.

 */


var myArray = [1, 2, 3, 4, 5];
console.log("Original Array:", myArray);

reverseArrayInPlace(myArray);

console.log("Reversed Array:", myArray);
function reverseArrayInPlace(arr) {
    var left = 0;
    var right = arr.length - 1;

    while (left < right) {
        // Swap elements at the left and right positions
        var temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        // Move the pointers towards the center
        left++;
        right--;
    }
}


/**
 * Q3. Write a program to check if two strings are a rotation of each other?

 */

var str3 = "waterbottle";
var str4 = "erbottlewat"
if (rotationOfEachOther(str3, str4)) {
    console.log(`${str3} and ${str4} are rotations of each other.`);
} else {
    console.log(`${str3} and ${str4} are not rotations of each other.`);
}
function rotationOfEachOther(str3, str4) {

    if (str3.length !== str4.length) {
        return false;
    }
    const conCat = str3 + str3;

    for (let i = 0; i < conCat.length - str4.length + 1; i++) {
        //console.log(conCat.slice(i, i + str4.length))
        if (conCat.slice(i, i + str4.length) === str4) {
            return true;

        }
    }
    return false;
}


/**
 *Q4 Write a program to print the first non-repeated character from a string?
 */
const inputStr = "programming";
const result = firstNonRepeatedChar(inputStr);

if (result) {
    console.log(`The first non-repeated character in '${inputStr}' is: ${result}`);
} else {
    console.log(`There are no non-repeated characters in '${inputStr}'.`);
}

function firstNonRepeatedChar(inputStr) {
    for (let i = 0; i < inputStr.length; i++) {
        let character = inputStr[i];
        let isRepeated = false;

        for (let j = 0; j < inputStr.length; j++) {
            if (i !== j && character === inputStr[j]) {
                isRepeated = true;
                break;
            }
        }
        if (!isRepeated) {
            return character;
        }
    }
    return null;
}

/**
 * Q5Read about the Tower of Hanoi algorithm. Write a program to implement it.
 */


// Example usage:
const n = 3;  // Number of disks
const source = "A";
const auxiliary = "B";
const target = "C";

console.log("Tower of Hanoi steps:");
towerOfHanoi(n, source, auxiliary, target);


function towerOfHanoi(n, sourcePeg, auxiliaryPeg, targetPeg) {
    if (n === 1) {
        console.log(`Move disk 1 from ${sourcePeg} to ${targetPeg}`);
        return;
    }

    towerOfHanoi(n - 1, sourcePeg, targetPeg, auxiliaryPeg);
    console.log(`Move disk ${n} from ${sourcePeg} to ${targetPeg}`);
    towerOfHanoi(n - 1, auxiliaryPeg, sourcePeg, targetPeg);
}

/**
 * Q6. Read about infix, prefix, and postfix expressions. Write a program to convert postfix to prefix expression.
 */


const postfixExpression = "ab+";
var prefixExpression = postfixToPrefix(postfixExpression);

console.log("Postfix Expression:", postfixExpression);
console.log("Prefix Expression:", prefixExpression);



function isOperator(char) {
    return ['+', '-', '*', '/', '^'].includes(char);
}

function postfixToPrefix(postfix) {
    const reversedPostfix = postfix.split('').reverse().join('');
    let prefix = '';

    for (let token of reversedPostfix) {
        if (isOperator(token)) {
            const operand1 = prefix.substring(0, prefix.indexOf(' '));
            prefix = prefix.substring(prefix.indexOf(' ') + 1);
            const operand2 = prefix.substring(0, prefix.indexOf(' '));
            prefix = prefix.substring(prefix.indexOf(' ') + 1);

            prefix = token + operand1 + ' ' + operand2 + ' ' + prefix;
        } else {
            prefix = token + ' ' + prefix;
        }
    }

    return prefix.trim();
}


/**
 * Q7  Write a program to convert prefix expression to infix expression.
 */

var prefixExpression = "*-A/BC-/AKL"; // Example prefix expression
const infixExpression = prefixToInfix(prefixExpression);

console.log("Prefix Expression:", prefixExpression);
console.log("Infix Expression:", infixExpression);


function isOperator(char) {
    return ['+', '-', '*', '/', '^'].includes(char);
}

function prefixToInfix(prefix) {
    const stack = [];
    for (let i = prefix.length - 1; i >= 0; i--) {
        const token = prefix[i];

        if (isOperator(token)) {
            const operand1 = stack.pop();
            const operand2 = stack.pop();
            const expression = `(${operand1}${token}${operand2})`;
            stack.push(expression);
        } else {
            stack.push(token);
        }
    }

    return stack.pop();
}


/**
 * Q8. Write a program to check if all the brackets are closed in a given code snippet.
 */


class Stack {
    constructor() {
        this.items = [];
        this.length = 0;
        this.insert = function (item) {
            this.items[this.length] = item;
            this.length++;
        }
        this.pop = function () {
            this.length--;
            return this.items.pop();
        }
        this.peek = function () {
            return this.items[this.length - 1];
        }
        //reverse a stack elements
        this.reverse = function () {
            var reverseStack = [];
            var length = this.length;
            for (var i = 0; i < length; i++) {
                var popedItem = this.pop();
                reverseStack.push(popedItem);
            }
            this.items = reverseStack;
        }
        //find the smallest number
        this.findSmallest = function () {
            if (this.length === 0) {
                return null;
            }
            let smallest = this.items[0];
            for (let i = 1; i < this.length; i++) {
                if (this.items[i] < smallest) {
                    smallest = this.items[i];
                }
            }
            return smallest;
        }
    }
}

var stack = new Stack();
var expression = "}[(){}]";
for (var i = 0; i < expression.length; i++) {
    if (expression[i] == "[" || expression[i] == "{" || expression[i] == "(") {
        stack.insert(expression[i]);
    } else {
        if (stack.length == 0) {
            console.log("Not blalanced");
            break;
        } else {
            var popedItem = stack.pop();
            if (popedItem == "(" && expression[i] == ")" ||
                popedItem == "{" && expression[i] == "}" ||
                popedItem == "[" || expression[i] == "]") {

            } else {
                console.log("Not balanced");
            }
        }
    }
    if (i == expression.length - 1) {
        if (stack.length == 0) {
            console.log("Balanced");
        } else {
            console.log("Not balanced");
        }
    }
}

/**
 *Q9 Write a program to reverse a stack.
 */

var stack1 = new Stack();


stack1.insert(6);
stack1.insert(3);
stack1.insert(8);
stack1.insert(7);
console.log("Before reverse : " + stack1.items);
stack1.reverse();

console.log("Afrer reverse : " + stack1.items);

/**
 * Q10. Write a program to find the smallest number using a stack.
 */

var stack2 = new Stack();
stack2.insert(6);
stack2.insert(3);
stack2.insert(8);
stack2.insert(7);
stack2.insert(4);

const smallestNumber = stack2.findSmallest();
console.log("Smallest number in the stack: " + smallestNumber);
