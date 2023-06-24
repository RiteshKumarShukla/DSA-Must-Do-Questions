// Reverse a string using a stack.    


function reverseString(str) {
    const stack = [];
    let reversedStr = '';

    // Push each character into the stack
    for (let i = 0; i < str.length; i++) {
        stack.push(str[i]);
    }

    // Pop each character from the stack to obtain the reversed order
    while (stack.length > 0) {
        reversedStr += stack.pop();
    }

    return reversedStr;
}

// Test case:
console.log(reverseString('Hello, World!')); // Output: "!dlroW ,olleH"
