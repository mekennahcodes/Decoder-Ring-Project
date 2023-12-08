// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

function caesar(input, shift, encode = true) {
  // Check if shift is an integer within the range of -25 to 25 (inclusive) or if it's zero
  if (!Number.isInteger(shift) || shift === 0 || shift > 25 || shift < -25) {
    return false; // If not, return false
  }

  // Calculate the shift amount based on whether it's encoding or decoding
  const shiftAmount = encode ? shift : (26 - shift) % 26;

  // Convert the input string to lowercase and perform character shifting
  const shiftedMessage = input.toLowerCase().replace(/[a-z]/g, (char) => {
    const code = char.charCodeAt(0); // Get the character code

    let shiftedCode = code + shiftAmount; // Shift the character code by the shift amount

    // Ensure the shifted code remains within the lowercase alphabet range
    if (shiftedCode > 122) {
      shiftedCode -= 26;
    } else if (shiftedCode < 97) {
      shiftedCode += 26;
    }

    return String.fromCharCode(shiftedCode); // Convert the shifted code back to a character
  });

  console.log(shiftedMessage); // Log the shifted message to the console
  return shiftedMessage; // Return the shifted message
}

module.exports = { caesar }; // Export the caesar function
