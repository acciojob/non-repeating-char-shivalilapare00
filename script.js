function firstNonRepeatedChar(str) {
 // Write your code here
	const freq = {};

  // Count frequency of each character
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }

  // Find the first character with frequency 1
  for (let char of str) {
    if (freq[char] === 1) {
      return char;
    }
  }

  return null;

}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
