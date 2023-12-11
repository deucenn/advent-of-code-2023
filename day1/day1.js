const { text } = require('./input.js')
const input = text
const linesArr = input.split('\n').map(line => line.replace(/[^0-9]/g, ''));

let totalCount = 0;

for (let i = 0; i < linesArr.length; i++) {
    const currentLine = linesArr[i];

    if (currentLine.length > 0) {
        const firstNumber = Number(currentLine[0]);
        const lastNumber = Number(currentLine[currentLine.length - 1]);

        const concatenatedNumber = Number(`${firstNumber}${lastNumber}`);

        totalCount += concatenatedNumber;
    }
}

console.log(totalCount);


