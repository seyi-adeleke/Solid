const stringNumbers = ['1', '2', '3', '4'];

class Helpers {
    static addTwo(number) {
        return number + 2;
    }
    
    static convertToInt(string) {
        return parseInt(string, 10);
    }
}

class Converter {
    constructor(stringNumbers, ConvertHelpers = Helpers) {
        this.stringNumbers = stringNumbers;
        this.helpers = ConvertHelpers;
    }
    
    convert() {
        this.stringNumbers.map((number) => {
            const convertedNumber = this.helpers.convertToInt(number);
            const convertedNumberplusTwo = this.helpers.addTwo(convertedNumber);
            this.printNumbers(convertedNumber);
        })
    }
    
    printNumbers(number) {
        console.log(number);
    }
}

const stringConverter = new Converter(stringNumbers);

stringConverter.convert();