class FarmAnimal {
    constructor(specie, legs, wings) {
        this.specie = specie;
        this.legs = legs;
        this.wings = wings;
    }

    getSpecie () {
        return this.specie;
    }

    getLegs() {
        return this.legs;
    }

    getWings() {
        return this.wings;
    }
}

const chicken = new FarmAnimal('chicken', 2, 2);
console.log(chicken.getWings());

// cows don't have wings (right?) but we need to pass null here to instantiate a new farm animal
// this is bad design
const cow  = new FarmAnimal('Cow', 4, null);
console.log(cow.getWings());