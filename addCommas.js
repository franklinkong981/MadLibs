/*Takes in a number and converts it into a string formatted with commas for readability.*/
function convertToReadableString(number) {
  //ensures that the input is either an integer or floating point number, handles invalid input format.
  try {
    if (isNaN(number)) return "Invalid input type, must be a valid integer or floating point number";
  } catch(e) {
    return "Invalid input, must be a valid integer or floating-point number";
  }

  return addCommas(number.toString());
}

/*Takes in a string representation of a number and adds a comma every 3 digits before the end of the number or the decimal point. */
function addCommas(numberString) {
  const startIndex = getStartIndex(numberString);
  const endIndex = getEndIndex(numberString);
  //if non-decimal point is less than 4 digits, no commas are needed.
  if (endIndex - startIndex <= 3) return numberString;

  let formattedNumberString = numberString;
  //start at endIndex and work backwards to startIndex, adding a comma every 3 digits.
  for (let currentIndex = endIndex - 3; currentIndex > startIndex; currentIndex -= 3) {
    formattedNumberString = `${formattedNumberString.slice(0, currentIndex)},${formattedNumberString.slice(currentIndex)}`;
  }

  return formattedNumberString;
}

module.exports = convertToReadableString, addCommas, getStartIndex, getEndIndex;