class Shape {
    constructor(height, width, type) {
      this.height = height;
      this.width = width;
      this.type = type; 
    }
    area() {
      return this.height * this.width;
    };

    getHeight() {
        return this.height
    }
}

class Square extends Shape {
    constructor(height) {
        super(height, 'height');
    }
    // overidding the parents area method allows up to be specific
    area() {
        return Math.pow(super.getHeight(), 2)
    };
}

const square = new Square(10, 10);

console.log(square.area());