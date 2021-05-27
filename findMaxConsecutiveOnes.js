// Question 2

// Find the maximum consecutive 1's in an array of 0's and 1's.

//answer:
const findMaxConsecutiveOnes = (nums) => {
  let max = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    nums[i] === 0 ? (count = 0) : count++;
    max = Math.max(max, count);
  }
  return max;
};

console.log(findMaxConsecutiveOnes([0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0]));
//output is: 3
