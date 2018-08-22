class FarmAnimal {
    constructor({ specie, legs, wingType }) {
        this.specie = specie;
        this.legs = legs;
        this.wings = wingType;
    }

    getSpecie () {
        return this.specie;
    }

    getLegs() {
        return this.legs;
    }

    getWings() {
        return this.wings.getWings();
    }
}

class Winged {
    constructor({ wings }) {
        this.wings = wings;
    }

    getWings () {
        return this.wings;
    }
}

const chicken = new FarmAnimal({
    specie: 'chicken',
    legs: 2,
    wingType: new Winged({
        wings: 2, 
    }),
});

console.log(chicken.getWings());
