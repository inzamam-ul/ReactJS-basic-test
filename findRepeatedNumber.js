// Question 3

// Suppose you have an array of 101 integers. This array is already sorted and all numbers in this array are consecutive. Each number only occurs once in the array except one number which occurs twice. Write a js code to find the repeated number.
// e.g $arr = array(0,1,2,3,4,5,6,7,7,8,9,10...................);

//answer:
const findRepeatedNumber = (array) => {
  //This function can find all of repeated numbers
  let repeatedNumbers = [];
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        if (repeatedNumbers.indexOf(array[i]) === -1) {
          repeatedNumbers.push(array[i]);
        }
      }
    }
  }
  return repeatedNumbers;
};

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 2, 10];

console.log(findRepeatedNumber(arr));
