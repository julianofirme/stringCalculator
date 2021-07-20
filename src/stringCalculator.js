function getNumbers(numberString) {
    if(numberString === '') return 0;
    
    return parseFloat(numberString);
}

function getArrayWithNumbers(numberString) {
    const arrayNumbers = []
    const numSplit = numberString
        .split(",")
    
    const getNumber = parseFloat(numSplit[0]);
    arrayNumbers.push(getNumber);

    return arrayNumbers;
}

console.log(getArrayWithNumbers('1'))

module.exports = { 
    getNumbers,
    getArrayWithNumbers
 };