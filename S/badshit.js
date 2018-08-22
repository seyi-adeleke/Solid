const stringNumbers = ['1', '2', '3', '4'];

// class converts string number to integer values, adds 2 to each one and then prints it
// the convert disobeys SRP because it is doing to many things
class Converter {
    static convert(stringNumbers) {
        const num = stringNumbers.map((num) => {
            return (parseInt(num, 10) + 2)
        })
        num.forEach(element => {
            console.log(element)
        });
    }
}

Converter.convert(stringNumbers);
