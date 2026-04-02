// Module 2 Assignment
// Name: Ryan Makori

// 1. Largest integer among two numbers
function largestOfTwo(a, b) {
  return a > b ? a : b;
}
console.log("1. Largest of two:", largestOfTwo(10, 20));


// 2. Average marks and grade
function averageGrade(students) {
  let total = 0;

  for (let i = 0; i < students.length; i++) {
    total += students[i].marks;
  }

  let avg = total / students.length;

  if (avg < 60) return "F";
  else if (avg < 70) return "D";
  else if (avg < 80) return "C";
  else if (avg < 90) return "B";
  else return "A";
}

// Example students
const students = [
  { name: "Jane", marks: 80 },
  { name: "Ciara", marks: 77 },
  { name: "Smith", marks: 88 },
  { name: "Thomas", marks: 95 },
  { name: "Shelby", marks: 68 }
];

let totalMarks = students.reduce((sum, s) => sum + s.marks, 0);
let avgMarks = totalMarks / students.length;

console.log("2. Average:", avgMarks);
console.log("2. Grade:", averageGrade(students));


// 3. Difference with 13
function difference(num) {
  if (num > 13) {
    return 2 * Math.abs(num - 13);
  } else {
    return 13 - num;
  }
}
console.log("3. Difference:", difference(20));


// 4. Check if one is 50 or sum is 50
function check50(a, b) {
  return a === 50 || b === 50 || (a + b === 50);
}
console.log("4. Check 50:", check50(25, 25));


// 5. Swap first and last characters
function swapChars(str) {
  if (str.length <= 1) return str;

  return str[str.length - 1] + str.slice(1, -1) + str[0];
}
console.log("5. Swap chars:", swapChars("hello"));


// 6. Largest of three integers
function largestOfThree(a, b, c) {
  return Math.max(a, b, c);
}
console.log("6. Largest of three:", largestOfThree(3, 7, 5));


// 7. Same last digit
function sameLastDigit(a, b, c) {
  return (a % 10 === b % 10) && (b % 10 === c % 10);
}
console.log("7. Same last digit:", sameLastDigit(27, 37, 47));


// 8. All digits the same
function allDigitsSame(num) {
  let str = num.toString();
  return str.split('').every(d => d === str[0]);
}
console.log("8. All digits same:", allDigitsSame(111));