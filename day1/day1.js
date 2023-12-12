const calculateTotalCount = (linesArr) => {
  let totalCount = 0;

  for (let i = 0; i < linesArr.length; i++) {
    let currentLine = linesArr[i];

    if (currentLine.length > 0) {
      const firstNumber = Number(currentLine[0]);
      const lastNumber = Number(currentLine[currentLine.length - 1]);

      const concatenatedNumber = Number(`${firstNumber}${lastNumber}`);

      totalCount += concatenatedNumber;
    }
  }

  return totalCount;
};

const numbers = {
  one: "o1e",
  two: "t2o",
  three: "t3e",
  four: "f4r",
  five: "f5e",
  six: "s6x",
  seven: "s7n",
  eight: "e8t",
  nine: "n9e",
};

const { text } = require("./input.js");
const input = text;
let linesArr = input.split("\n");

// Replace words with numbers
for (let key in numbers) {
  linesArr = linesArr.map((line) =>
    line.replace(new RegExp(key, "g"), numbers[key])
  );
}

// Remove non-numeric characters
linesArr = linesArr.map((line) => line.replace(/[^0-9]/g, ""));

const result = calculateTotalCount(linesArr);
console.log(result);

console.log(linesArr);
