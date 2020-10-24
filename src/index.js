module.exports = function toReadable (number) {
  const array = number.toString().split("").reverse(), 
    ARRAY_LESS_NUM = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"],
    ARRAY_MORE_NUM = ["", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
  let result = "";
  
  for (let i = array.length - 1; i >= 1; i--) {
    if ((i + 1) % 2 === 0) {
      if(array[i] >= 2 && array[i - 1] != 0) {
        result += ARRAY_MORE_NUM[array[i]] + " " + ARRAY_LESS_NUM[array[i - 1]];
      }
      else {
        result += array[i - 1] != 0 ? ARRAY_LESS_NUM[(+(array[i] + '0') + +array[i - 1])] : ARRAY_MORE_NUM[array[i]];
      }
    } else if((i + 1) % 3 === 0) {
      result += array[i] != 0 ? ARRAY_LESS_NUM[array[i]] + " hundred " : "";
    } 
  }

  return array.length == 1 ? ARRAY_LESS_NUM[number] : (result.slice(-1) == " " ? result.slice(0, -1) : result);
}
