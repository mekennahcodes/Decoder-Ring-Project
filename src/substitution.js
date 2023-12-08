// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // Define the trueAlphabet array containing all letters from 'a' to 'z'
  const trueAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  // Function to check if any value in the newAlphabetArray appears more than once
  function hasDuplicateValues(newAlphabetArray) {
    return newAlphabetArray.some((character, index) => {
      return newAlphabetArray.indexOf(character) !== index;
    });
  }

  // Function to convert string to an array
  function getArrayFromString(string) {
    return Array.from(string);
  }

  // Function to encode a message using a substitution cipher
  function encodeMessage(inputArray, newAlphabetArray) {
    return inputArray.map((character) => {
      if (character === " ") {
        return character; // Preserve spaces in the message
      } else {
        let desiredLetter = trueAlphabet.find((letter) => letter === character); // Find the letter in the true alphabet
        return newAlphabetArray[trueAlphabet.indexOf(desiredLetter)]; // Substitute the letter using the index from the newAlphabetArray
      }
    }).join("");
  }

  // Function to decode a message using a substitution cipher
  function decodeMessage(inputArray, newAlphabetArray) {
    return inputArray.map((character) => {
      if (character === " ") {
        return character; // Preserve spaces in the message
      } else {
        let desiredCharacter = newAlphabetArray.find((indexCharacter) => indexCharacter === character); // Find the character in the substitute alphabet
        return trueAlphabet[newAlphabetArray.indexOf(desiredCharacter)]; // Substitute the character using the index from the trueAlphabet
      }
    }).join("");
  }

  // Main substitution function that either encodes or decodes the input message
  function substitution(input, alphabet, encode = true) {
    // Check if the alphabet length is 26 or if it's missing
    if (!alphabet || alphabet.length !== 26) {
      return false;
    }
    
    if (!input) {
      return false; // Return false if input is missing
    }

    const inputArray = getArrayFromString(input.toLowerCase()); // Convert input string to an array
    const newAlphabetArray = getArrayFromString(alphabet.toLowerCase()); // Convert the substitution alphabet to an array

    if (hasDuplicateValues(newAlphabetArray)) {
      return false; // Return false if there are duplicate values in the substitution alphabet
    }
    
    // Decide whether to encode or decode based on the 'encode' parameter
    if (encode) {
      return encodeMessage(inputArray, newAlphabetArray);
    } else {
      return decodeMessage(inputArray, newAlphabetArray);
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };

