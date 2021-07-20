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

module.exports = { 
    getNumbers,
    getArrayWithNumbers
 };