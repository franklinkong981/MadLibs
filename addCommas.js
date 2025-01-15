/*Takes in a number and converts it into a string formatted with commas for readability.*/
function convertToReadableString(number) {
  //ensures that the input is either an integer or floating point number, handles invalid input format.
  try {
    if (isNaN(number)) return "Invalid input type, must be a valid integer or floating point number";
  } catch(e) {
    return "Invalid input, must be a valid integer or floating-point number";
  }

  //If decimal, start at decimal point and work backwards, inserting comma every 3 digits. If whole number, start at end and work backwards.
  return addCommas(number.toString());
}



module.exports = convertToReadableString;