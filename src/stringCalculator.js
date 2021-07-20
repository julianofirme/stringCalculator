function getNumbers(numberString) {
    if(numberString === '') return 0;
    
    return parseFloat(numberString);
}

module.exports = { 
    getNumbers,
 };