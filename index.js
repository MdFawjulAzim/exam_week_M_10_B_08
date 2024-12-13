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


