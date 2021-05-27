// Question 1

// Define an array of numbers (use any random numbers). Write a program to print only the even numbers of the array. Do not use any library functions, need to do via for loops only

//answer:
const printEvenNumber = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0 && arr[i] !== 0) {
      console.log(arr[i], "is even");
    }
  }
};

let array = [0, 1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 10];

printEvenNumber(array);
