// Reverse the words of a String.

function reverseWords(str) {
    // Split the string into an array of words
    const words = str.split(' ');
  
    // Reverse the order of the words
    const reversedWords = words.reverse();
  
    // Join the reversed words back into a string
    const reversedString = reversedWords.join(' ');
  
    // Return the reversed string
    return reversedString;
  }
  
  // Example usage
  const input = "Hello world, how are you?";
  const reversed = reverseWords(input);
  console.log(reversed); // Output: "you? are how world, Hello"
  