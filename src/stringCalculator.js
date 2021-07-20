function getNumbers(numberString) {
    if(numberString === '') return 0;
    
    return parseFloat(numberString);
}

function getArrayWithNumbers(numberString) {
    const splitString = /[\n,]/

    const numSplit = numberString
        .split(splitString)
        .map(num => parseFloat(num));

    return numSplit;
}

function getSumByArray(numbers) {
    let sum = 0;
    
    sum = numbers[0] + numbers[1] + numbers[2];

    return sum
}

module.exports = { 
    getNumbers,
    getArrayWithNumbers,
    getSumByArray
 };