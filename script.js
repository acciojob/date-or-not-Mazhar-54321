var isDate = function (input) {
   if (input instanceof Date) {
    return !isNaN(input.getTime());
  }

  // Check if the input is a valid string that can be parsed into a Date
  const parsedDate = new Date(input);
  return !isNaN(parsedDate.getTime());
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
