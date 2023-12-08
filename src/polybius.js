// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // Object representing the Polybius square mapping letters to numbers
  const polybiusSquare = {
    "a": "11", "b": "21", "c": "31", "d": "41", "e": "51",
    "f": "12", "g": "22", "h": "32", "i": "42", "j": "42", "k": "52",
    "l": "13", "m": "23", "n": "33", "o": "43", "p": "53",
    "q": "14", "r": "24", "s": "34", "t": "44", "u": "54",
    "v": "15", "w": "25", "x": "35", "y": "45", "z": "55"
  };

  // Object to store the reverse mapping of Polybius square (numbers to letters)
  const reversePolybiusSquare = {};

  // Loop to create reversePolybiusSquare mapping
  for (let letter in polybiusSquare) {
    const numberPair = polybiusSquare[letter];

    if (reversePolybiusSquare[numberPair]) {
      reversePolybiusSquare[numberPair] = `(${reversePolybiusSquare[numberPair]}/${letter})`;
    } else {
      reversePolybiusSquare[numberPair] = letter;
    }
  }

  // Function to convert string to array
  function getArrayFromString(string) {
    return Array.from(string);
  }

  // Function to encode input using Polybius square
  function encodeInput(input) {
    const startingArray = getArrayFromString(input.toLowerCase());

    return startingArray.map(character => {
      if (character === " ") {
        return character;
      } else {
        return polybiusSquare[character];
      }
    }).join("");
  }

  // Function to decode input using reverse Polybius square
  function decodeInput(input) {
    const startingArray = getArrayFromString(input);
    const decodedArray = [];

    for (let i = 0; i < startingArray.length; i++) {
      const index = startingArray[i];

      if (index === " ") {
        decodedArray.push(index);
      } else {
        let tens = index;
        let ones = startingArray[i + 1];
        const numberKey = tens + ones;
        i = i + 1;
        decodedArray.push(reversePolybiusSquare[numberKey]);
      }
    }

    return decodedArray.join("");
  }

  // Main polybius function determining encoding or decoding based on 'encode' parameter
  function polybius(input, encode = true) {
    if (encode === false) {
      if (input.replace(" ", "").length % 2 > 0) {
        return false; // Return false if decoding an odd-length input without spaces
      } else {
        return decodeInput(input);
      }
    }

    if (encode) {
      return encodeInput(input);
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
