function getNumbers(numberString) {
    if(numberString === '') return 0;
    
    if(typeof numberString === "string") {
        return parseFloat(numberString);
    }

    return numberString;
}

module.exports = { 
    getNumbers,
 };