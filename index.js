// 1)  Write a for loop using javascript and it will show only even numbers between 1 - 20. Ex: 2, 4, 6, 8, 10 ,12, 14, 16, 18, 20
console.log("Answer To the Question NO:01")
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }

// 2)  Write a function reverseString(str) that takes a string and returns it reversed. Ex: reverseString("hello"); // Output: "olleh"
console.log("Answer To the Question NO:02")
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("hello"));


// 3) Write a function removeDuplicates(arr) that takes an array and returns a new array with only unique values (duplicates removed). Ex: removeDuplicates([5, 5, 5, 6, 7]); // Output: [5, 6, 7]
console.log("Answer To the Question NO:03")
function removeDuplicates(arr) {
    return [...new Set(arr)];
  }
  console.log(removeDuplicates([5, 5, 5, 6, 7]));