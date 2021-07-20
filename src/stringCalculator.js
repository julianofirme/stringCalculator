function getNumbers(numberString) {
    if(numberString === '') return 0;
    
    return parseFloat(numberString);
}

function getArrayWithNumbers(numberString) {
    const numSplit = numberString
        .split(",")
        .map(num => parseFloat(num));

    return numSplit;
}

module.exports = { 
    getNumbers,
    getArrayWithNumbers
 };