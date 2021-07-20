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
    
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];   
    }

    return sum;
}

module.exports = { 
    getNumbers,
    getArrayWithNumbers,
    getSumByArray
 };